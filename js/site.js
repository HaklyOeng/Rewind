// get the user's message to reverse
function getValues() {

        // get the text input from the page
        let message = document.getElementById('userInput').value;
        // validate the input: make sure the input no empty

        if (message.length == 0) {
            Swal.fire ({
                icon: 'error',
                backdrop: false,
                title: 'Oops!',
                text: 'Please enter a string to reverse'
        });
        } else {
        // pass the input to reverseMessage function and assign its return value to a variable
        let revMsg = reverseMessage(message);
        // give the reversed message to displayMessage
        displayMessage(revMsg);

        }

}

//reverse tge string
function reverseMessage(input) { // input = "hello"

   /* let inputArray = input.split(''); // inputArray = ['h', 'e', 'l', 'l', 'o'}
    let outputArray = [];

    for (let i = inputArray.length - 1; i >= 0; i--) {
        let letter = inputArray[i];
        outputArray.push(letter)
    }

    let output = outputArray.join(''); // [o, l, l, e, h] => 'olleh'
    return output; */

    let output = '';
    for (let i = input.length - 1; i >= 0; i--) {
        let letter = input[i];
        output += letter;
    }
    return output;
}

//display the reverse message
function displayMessage(message) {
    document.getElementById('msg').textContent = `Your message reversed is: ${message}`;
    document.getElementById('alert').classList.remove('invisible');
}
