const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags () {
    return (caseInsensitiveFlag.checked ? "i" : "") + (globalFlag.checked ? "g" : "");
}

testButton.addEventListener("click", () => {
    const pattern = regexPattern.value;
    const regex = new RegExp(pattern, getFlags());
    const text = stringToTest.innerText;

    const matches = text.match(regex);

    if (matches) {
        const highlightedText = text.replace(regex, (match) => {
            return `<span class="highlight">${match}</span>`;
        });

        stringToTest.innerHTML = highlightedText;
        testResult.innerText = matches.join(", ");
    } else {
        testResult.innerText = "no match";
    }
});