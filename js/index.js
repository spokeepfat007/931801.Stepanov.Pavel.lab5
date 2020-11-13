document.ondblclick = () => {
    if (event.target.className === 'paint') {
        const paint = document.querySelector('.paint');
        paint.style.display = 'none';
        const news = Array.from(document.getElementsByClassName('new'));
        for (let i = 0; i < news.length; i++) {
            news[i].style.display = 'none';
        }
    }
};

const show = e => {
    document.getElementById(e).style.display = 'block';
    document.querySelector('.paint').style.display = 'block';
};