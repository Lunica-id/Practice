function checkPalindrome(value) {
    let origin = value.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char));
    for (let i=0;i<origin.length/2;i++) {
        if (origin[i]!=origin[origin.length-1-i]) {
            return false;
        }
    }
    return true;
}

let result = document.getElementById('result');

document.getElementById('check-btn').addEventListener('click', function () {
    const input = document.getElementById('text-input').value.trim();
    if (input == '') {
        alert('Please input a value');
    } else if (checkPalindrome(input)) {
        result.innerHTML = `<p><strong>${input}</strong> is a palindrome.</p>`;
    } else {
        result.innerHTML= `<p><strong>${input}</strong> is not a palindrome.</p>`;
    }
    document.getElementById('text-input').value='';

});