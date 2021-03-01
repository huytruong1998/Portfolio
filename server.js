const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const validateMailInput = require('./validation/mail');
const app = express();
const { google, oauth2_v2 } = require('googleapis');

const CLIENT_ID = keys.CLIENT_ID;
const CLIENT_SECRET = keys.CLIENT_SECRET;
const REDIRECT_URI = keys.REDIRECT_URI;
const REFRESH_TOKEN = keys.REFRESH_TOKEN;
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post('/api/send', async (req, res) => {
  const { errors, isValid } = validateMailInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: keys.emailname,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const htmlEmail = `
          <p> Some one send mail in your portfollio</p>
          <h3> Contact detail </h3>
          <p> Name: ${req.body.name}</p>
          <p> Email: ${req.body.email}</p>
          <p> Message: ${req.body.message}</p>
          `;

      const mailOptions = {
        from: `"Job Portfollio" <${keys.emailname}>`,
        to: keys.emailname,
        subject: `Porfollio mail ${req.body.email}`,
        text: 'This is text',
        html: htmlEmail,
      };

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }

  sendMail()
    .then((result) => console.log('email sent...', result))
    .catch((error) => console.log(error.message));

  res.json({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    success: 'You have successfully sent email !',
  });
});

app.listen(PORT, () => {
  console.log(`Server listen on PORT ${PORT}`);
});
