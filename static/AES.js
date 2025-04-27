function encryptMessage(event) {
    event.preventDefault(); // Prevent any default form action

    // Handle the inputs
    let message = document.getElementById('message').value;
    let keyBits = document.getElementById('keyBits').value;

    // Inspect input field
    if (!message) {
        alert ("Please provide a message.");
        return;
    }

    // AES encryption
    let encrypted = encryptAES(message, keyBits);

    // Decode ciphertext based on its encoding type (Base64 or Hex)
    let decodedCipherText = decodeCipherText(encrypted.ciphertext);
    if (!decodedCipherText) {
        console.log("Unable to decode cipher text: " + decodedCipherText);
        return '';
    }

    // AES decryption
    let decrypted = decryptAES(decodedCipherText, encrypted.key, encrypted.iv);
    console.log('Decrypted: ' + decrypted)
    
    // Define label color
    const labelColor = getComputedStyle(document.documentElement).getPropertyValue('--buttonBG').trim();

    // Show result in the HTML
    let resultContainer = document.getElementById('encryptedData');
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
    <div class="div-header">Encrypted Data:</div>
    <div class="container-text">
        <p><strong style="color: ${labelColor};">Key:</strong> ${encrypted.key}</p>
        <p><strong style="color: ${labelColor};">iv:</strong> ${encrypted.iv}</p>
        <p><strong style="color: ${labelColor};">Encrypted Text:</strong> ${encrypted.ciphertext}<br></p>
        <p><strong style="color: ${labelColor};">Received Text:</strong> ${message}</p>
        <p><strong style="color: ${labelColor};">Decrypted Text:</strong> ${decrypted}</p>
    </div>
`;
}


function encryptAES(message, keyBits) {
    // Generate key
    let key
    if (keyBits === 256) {
        key = CryptoJS.lib.WordArray.random(32); // 256-bit
    } else if (keyBits === 192) {
        key = CryptoJS.lib.WordArray.random(24); // 192-bit
    } else if (keyBits === 192) {
        key = CryptoJS.lib.WordArray.random(16); // 128-bit
    } else {
        key = CryptoJS.lib.WordArray.random(32); // 256-bit
    };

    // Generate random IV: 16 bytes for AES
    let iv = CryptoJS.lib.WordArray.random(16);
    
    // Encrypt
    let encrypted = CryptoJS.AES.encrypt(message, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    let data = {
        ciphertext: encrypted.ciphertext.toString(CryptoJS.enc.Base64),
        key: key,
        iv: iv.toString(CryptoJS.enc.Hex)
    };

    return data;
}


function decryptAES(encryptedText, key, iv) {
    // Convert IV from Hex to WordArray
    let ivWordArray = CryptoJS.enc.Hex.parse(iv);
    console.log('iv: ' + iv + '\nArray: ' + ivWordArray);

    // Decrypt
    let decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
        iv: ivWordArray,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // Return the decrypted message as UTF-8 string
    return decrypted.toString(CryptoJS.enc.Utf8);
}


// Button Functions
function decrypt() {
    fetch('/', {
        method: 'GET',
    }).then(response => {
        if (response.ok) {
            window.location.href = '/';  // Redirect to the AES page
        } else {
            console.error('Decryption request failed');
        }
    }).catch(err => console.error('Fetch error: ', err)); // Handle any errors
}


function encrypt() {
    fetch('/AES', {
        method: 'GET',
    }).then(response => {
        if (response.ok) {
            window.location.href = '/AES';  // Redirect to the AES page
        } else {
            console.error('Encryption request failed');
        }
    }).catch(err => console.error('Fetch error: ', err)); // Handle any errors
}
