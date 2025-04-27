// Function to handle HTML button selection
function select(buttonId) {
    // Remove the 'selected' class from all buttons
    let buttons = document.querySelectorAll('.button-key');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    let selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('selected');

    // Set the value of keyBits based on the selected button's ID
    let keyBits = buttonId.replace('key', ''); // Extract input
    document.getElementById('keyBits').value = keyBits;
    console.log('Key Bits: ' + keyBits)
}