function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (allowedChars.length === 0) {
        return "At least 1 set of character needs to be selected";
    }
    for (let i = 0; i < length; i++) {
        const randomPass = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomPass];
    }

    return password; 
}

document.getElementById('generatePass').addEventListener('click', () => {
    const length = 12;
    const includeLowercase = document.getElementById('allowedLower').checked;
    const includeUppercase = document.getElementById('allowedUpper').checked;
    const includeNumbers= document.getElementById('allowedNumber').checked;
    const includeSymbols = document.getElementById('allowedSymbol').checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('passwordResult').textContent = password;
});


document.getElementById('copyPass').addEventListener('click', () => {
    const password = document.getElementById('passwordResult').textContent;
    navigator.clipboard.writeText(password).then(() => {
        document.getElementById('copy').textContent = 'Password copied!';
    }).catch(() => {
        document.getElementById('copy').textContent = 'Failed to copy password.';
    });
});
