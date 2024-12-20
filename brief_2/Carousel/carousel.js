const images = document.getElementsByClassName("image");
const input = document.getElementsByTagName("input")[0];
let index = 0;


//fonctionnel mais voir pour le rendre plus propre plus tard
input.onclick = click;


function click() {
    index++;
    if (index >= images.length)
        index = 0;
    hideImages();
    showImage(index);
}

//cache toutes les images de ma collection images
function hideImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].hidden = true;
    }
}

function showImage(index) {
    images[index].hidden = false;
}