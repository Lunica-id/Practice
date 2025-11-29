function convertMarkdown(text) {
    const lines = text.split('\n');
    const htmlLines = lines.map(line => {
    // Blockquote
        if (/^> /.test(line)) {
            return `<blockquote>${convertMarkdown(line.slice(2))}</blockquote>`;
        }

    // Heading
        if (/^### /.test(line)) {
        return `<h3>${convertMarkdown(line.slice(4))}</h3>`;
    } else if (/^## /.test(line)) {
        return `<h2>${convertMarkdown(line.slice(3))}</h2>`;
    } else if (/^# /.test(line)) {
        return `<h1>${convertMarkdown(line.slice(2))}</h1>`;
    }

    // Images
        if (/!\[(.*?)\]\((.*?)\)/.test(line)) {
            return line.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
        }

    // Links
        if (/\[(.*?)\]\((.*?)\)/.test(line)) {
            line = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
        }

    // Bold
        line = line.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

    // Italic
        line = line.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

    // ignore blank line
        if (line.trim() === '') return '';

        return line;
    });

    return htmlLines.join('');
}



const input = document.getElementById('markdown-input');
const output = document.getElementById('html-output');
const preview = document.getElementById('preview');

input.addEventListener("input", function (e) {
    const html = convertMarkdown(e.target.value);
    output.textContent = html;
    preview.innerHTML = html;
});