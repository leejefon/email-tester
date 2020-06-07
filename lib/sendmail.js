// require('dotenv').config();

const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const mgTransport = require('nodemailer-mailgun-transport');
const templates = require('./templates');

const transports = {
  sendgrid: nodemailer.createTransport(sgTransport({
    auth: {
      api_user: process.env.SENDGRID_USER,
      api_key: process.env.SENDGRID_PASS
    }
  })),
  sendgridProd: nodemailer.createTransport(sgTransport({
    auth: {
      api_user: process.env.SENDGRID_PROD_USER,
      api_key: process.env.SENDGRID_PROD_PASS
    }
  })),
  aliCloud: nodemailer.createTransport({
    host: 'smtpdm.aliyun.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ALI_USER,
      pass: process.env.ALI_PASS
    }
  }),
  aliCloudProd: nodemailer.createTransport({
    host: 'smtpdm.aliyun.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ALI_PROD_USER,
      pass: process.env.ALI_PROD_PASS
    }
  }),
  mailgun: nodemailer.createTransport(mgTransport({
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_USER
    }
  })),
  gmail: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  }),
  qiye163: nodemailer.createTransport({
    service: '163',
    auth: {
      user: process.env.QIYE_163_USER,
      pass: process.env.QIYE_163_PASS
    }
  })
};

const fromEmail = {
  sendgrid: 'info@mail.gotin.online',
  sendgridProd: 'info@mail.gotin.online',
  aliCloud: 'help@gotin.live',
  aliCloudProd: 'info@email.gotin.online',
  mailgun: 'leejefon@gmail.com',
  gmail: 'leejefon@gmail.com',
  qiye163: 'jeff_lee@gotin.online'
};

function testEmail(params, transport = 'sendgrid', template = 'simple') {
  const emailParams = {
    from: fromEmail[transport],
    to: params.email,
    subject: `Youda Email Test from ${transport}`,
    html: templates[template]()
  };
  return _send(transport, emailParams);
}

function _send(t, params) {
  return new Promise((resolve, reject) => {
    transports[t].sendMail(params, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('sent');
      }
    });
  });
}

// testEmail({ email: 'leejefon@gmail.com' }, 'aliCloudProd', 'youdaVerifyEmail');

module.exports = {
  testEmail
};
