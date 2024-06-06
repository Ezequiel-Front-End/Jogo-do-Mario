const text = document.getElementById('sec-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'FrontEnd Developer';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Web Design';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Systems Analyst';
    }, 8000);
}

textLoad();

setInterval(textLoad, 12000);