const images = [
    'https://media.filfan.com/NewsPics/FilfanNew/large/356799_0.jpg',
    'https://cdn.magicdecor.in/com/2023/10/25162143/Noir-Knight-Ascends-Batman-Wall-Painting.jpg',
    'https://www.futbox.com/img/v1/a08/0c2/889/ce4/4fb4320ca9b52fe79ef8.png'
];

let i = 0;
const img = document.getElementById("img");

function show() {
    img.src = images[i];
}

document.getElementById("prev").onclick = () => {
    i = (i - 1 + images.length) % images.length;
    show();
};

document.getElementById("next").onclick = () => {
    i = (i + 1) % images.length;
    show();
};

document.getElementById("reset").onclick = () => {
    i = 0;
    show();
};

show();