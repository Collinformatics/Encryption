// Function to handle HTML button selection
function select(bits) {
    // Directly use the passed 'bits' as the button ID
    let buttonId = bits;

    // Remove the 'selected' class from all buttons
    let buttons = document.querySelectorAll('.button-key');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    let selectedButton = document.getElementById(buttonId);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    } else {
        console.error('Button not found:', buttonId);
    }

    // Set the value of keyBits based on the selected button's ID
    document.getElementById('keyBits').value = bits;
}
