// Encrypts the given text using Caesar Cipher with a specified shift
function encryptText() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    let encryptedMessage = "";

    // Loop through each character of the message
    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Encrypt lowercase letters
        if (char >= 'a' && char <= 'z') {
            encryptedMessage += String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        }
        // Encrypt uppercase letters
        else if (char >= 'A' && char <= 'Z') {
            encryptedMessage += String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        }
        // Non-alphabetical characters remain unchanged
        else {
            encryptedMessage += char;
        }
    }

    document.getElementById("result").value = encryptedMessage;
}

// Decrypts the given text using Caesar Cipher with a specified shift
function decryptText() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    let decryptedMessage = "";

    // Loop through each character of the message
    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Decrypt lowercase letters
        if (char >= 'a' && char <= 'z') {
            decryptedMessage += String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
        }
        // Decrypt uppercase letters
        else if (char >= 'A' && char <= 'Z') {
            decryptedMessage += String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
        }
        // Non-alphabetical characters remain unchanged
        else {
            decryptedMessage += char;
        }
    }

    document.getElementById("result").value = decryptedMessage;
}
