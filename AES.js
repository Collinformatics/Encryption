const CryptoJS = require('crypto-js');



// Parameters
const bits = [224, 256, 384, 512];

let message = 'hidden message';
let key = 'password1234';


function encrypt(message, password) {
  let encrypted = CryptoJS.AES.encrypt(message, password).toString();
  console.log(
    'Message: ' + message + '\n' +
    'Password: ' + password
  );
  return encrypted
}

function decrypt(encrypted, password) {
  let bytes = CryptoJS.AES.decrypt(encrypted, password);
  let decoded = bytes.toString(CryptoJS.enc.Utf8);
  console.log(
    'Hidden Message: ' + encrypted + '\n' + 
    'Decrypted:', decoded);
  return decoded;
}


encrypted = encrypt(message, key);
decrypt(encrypted , key)







