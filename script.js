document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', themeToggle.checked);
    });
});

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (display.value) {
            display.value = eval(display.value) || '';
        }
    } catch {
        display.value = 'Error';
    }
}
