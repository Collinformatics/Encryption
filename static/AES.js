function encryptMessage(event) {
    event.preventDefault(); // Prevent any default form action

    // Handle the inputs
    let message = document.getElementById('message').value;
    let key = document.getElementById('key').value;
    console.log(message + '\n' + key + '\n');

    // Inspect input field
    if (!message || !key) {
        alert ("Please provide a key and a message.");
        return;
    }

    // AES encryption
    let encryptedText = encryptAES(message, key);
    let decryptedText = decryptAES(encryptedText, key);


    // Show result in the HTML
    let resultContainer = document.getElementById('encryptedData');
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
    <div class="div-header">Encrypted Data:</div>
    <div class="container-text">
        <p><strong style="color: #009000;">Key:</strong> ${key}</p>
        <p><strong style="color: #009000;">Encrypted Text:</strong> ${encryptedText}<br></p>
        <p><strong style="color: #009000;">Received Text:</strong> ${message}</p>
        <p><strong style="color: #009000;">Decrypted Text:</strong> ${decryptedText}</p>
    </div>
`;
}


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
