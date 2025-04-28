function decodeCipherText(encryptedText) {
    // Check if the string is Base64 or Hex
    if (isBase64(encryptedText)) {
        console.log('Base64 encoding detected: ' + encryptedText);
        return CryptoJS.enc.Base64.parse(encryptedText);  // Decode from Base64
    } else if (isHex(encryptedText)) {
        console.log('Hex encoding detected: ' + encryptedText);
        return CryptoJS.enc.Hex.parse(encryptedText);  // Decode from Hex
    } else {
        console.log('Unknown encoding type: ' + encryptedText);
        console.log('Unaltered text returned.')
        return encryptedText;  // Return null if unknown encoding
    }
}


function isBase64(str) {
    // Base64 characters: A-Z, a-z, 0-9, +, /, and may end with '='
    let regex = /^[A-Za-z0-9+/=]+$/;
    return regex.test(str);
}


function isHex(str) {
    // Hex characters: 0-9 and a-f (lowercase only)
    let regex = /^[0-9a-f]+$/;
    return regex.test(str);
}



//// Decode ciphertext based on its encoding type (Base64 or Hex)
//let cipherText = 'SGlkZGVuIE1lc3NhZ2VzCg=='
//let decodedCipherText = decodeCipherText(cipherText);
