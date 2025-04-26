function encryptAES(message, password) {
  let encrypted = CryptoJS.AES.encrypt(message, password).toString();
  console.log(
    'Message: ' + message + '\n' +
    'Password: ' + password
  );
  return encrypted
}

function decryptAES(encrypted, password) {
  let bytes = CryptoJS.AES.decrypt(encrypted, password);
  let decoded = bytes.toString(CryptoJS.enc.Utf8);
  console.log(
    'Hidden Message: ' + encrypted + '\n' +
    'Decrypted:', decoded);
  return decoded;
}
