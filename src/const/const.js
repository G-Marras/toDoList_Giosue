const status = {
  open:'open',
  deleted:'deleted',
}

const userStatus = {
  pending: 'pending',
  active: 'active',
}
const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'
'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\n'+
'-----END RSA PRIVATE KEY-----'

const publicKey = '';
const mailConfig = {
  senderAddress: 'giosue.marras@gmail.com',
  smtpPassword:' 0123456789',
  subject: 'todolist registration',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  html: '',

}

export {
  status,
  userStatus,
  privateKey,
  publicKey,
  mailConfig,
}