const sendmail = require('../lib/sendmail');

function send(req, res) {
  const { transport, to: email, template } = req.body;

  sendmail
    .testEmail({ email }, transport, template)
    .then(() => {
      res.send({ status: 'OK' });
    })
    .catch((err) => {
      res.status(500).send({ status: 'Not OK', err });
    });
}

module.exports = {
  send
};
