module.exports = {
  smtp: {
    protocal: '',
    email: '',
    password: '',
    server: '',
    port: '',
    secure: true,
    security: '',
  },
  channel: 'waft', // ['smtp','mailgun','sendgrid']
  mailgun: {
    api_key: '',
    domain: '',
  },
  sendgrid: {
    api_key: '',
  },
};
