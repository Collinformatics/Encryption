function decryptText() {
    const testrun = true;

    let encryptedText;
    let key;

    if (testrun) {
        // test input
        encryptedText = 'aGlkZSB0aGUgbWVzc2FnZQo=';
        key = '3QFdGtKDMosrulVEErk7QgN23K3p5D_xwQt4KCPCRbg='; // 'ave99noodle'
    } else {
        encryptedText = document.getElementById('encodedText').value;
        key = document.getElementById('key').value;
    }

    console.log('Encrypted:', encryptedText);
    console.log('Key:', key);

    // Inspect input field
    if (!encryptedText) {
        alert("Please provide encrypted text.");
        return;
    }

    // Create the data object to send
    const data = {
        encryptedText: encryptedText,
        key: key
    };

    // Send a POST request to the '/decryption' route
    fetch('/decryption', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Show the decrypted data in the HTML
        let resultContainer = document.getElementById('decryptedData');
        resultContainer.style.display = 'block';
        resultContainer.innerHTML = `
            <div class="div-header">Inputs:</div>
            <div class="container-text">
                <p><strong style="color: #009000;">Key:</strong> ${key}</p>
                <p><strong style="color: #009000;">Encrypted Text:</strong> ${encryptedText}</p>
            </div>
            <div class="div-header">Decrypted Data:</div>
            <div class="container-text">
                <p><strong style="color: #009000;">Base64:</strong> ${data.base64}</p>
                <p><strong style="color: #009000;">Fernet:</strong> ${data.fernet}</p>
                <p><strong style="color: #009000;">Hexadecimal:</strong> ${data.hex}</p>
                <p><strong style="color: #009000;">URL Decode:</strong> ${data.url}</p>
            </div>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Button Functions
function decryptionPage() {
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

function encryptPage() {
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
