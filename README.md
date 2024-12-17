Text Encryption and Decryption with File Upload
This web app lets users encrypt or decrypt text using the Caesar Cipher. You can either type the text directly or upload a file. You can also choose a shift value to change how the text is encrypted or decrypted.
Features:
Encrypt and decrypt text using the Caesar Cipher.
Upload a text file to encrypt or decrypt its contents.
Set a shift value to control how much the text is changed.
See the result in a text box.
Technologies Used:
HTML: For building the webpage.
CSS: For styling the page.
JavaScript: For handling encryption, decryption, and user actions.
How to Use:
Enter Text Manually: Type your text into the box.
Upload a File: Choose a text file to encrypt or decrypt.
Set Shift Value: Pick a number to control how much the text is changed.
View Result: See the encrypted or decrypted text in the box.

Type the text you want to encrypt or decrypt in the text area labeled "Enter your message".
Enter a shift value for the Caesar Cipher in the input box.
Click the "Encrypt" or "Decrypt" button to see the result in the output area.
Upload a Text File:

Click the "Or upload a text file" button to choose a .txt file from your computer.
Enter a shift value for the cipher.
Click the "Encrypt" or "Decrypt" button to process the file's content and display the result.
View Results:

The encrypted or decrypted content will appear in the result text area.
How the Application Works
Caesar Cipher:

The application uses a basic Caesar Cipher to encrypt and decrypt text. This cipher works by shifting each letter in the alphabet by a specified number (the shift value).
For example, a shift of 3 would turn the letter 'A' into 'D', 'B' into 'E', and so on.
File Handling:

The app can process text files uploaded by the user. When a file is uploaded, its content is read using the FileReader API, and the text is then encrypted or decrypted based on the shift value.
Encryption/Decryption Logic:

The JavaScript functions for encryption and decryption loop through the text, shifting each letter by the specified amount. Non-alphabetical characters (like spaces or punctuation) remain unchanged.


