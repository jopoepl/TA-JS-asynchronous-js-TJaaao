let img = document.querySelector(`img`);
let btn = document.querySelector(`a`);


function generateImg(){
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, `https://api.thecatapi.com/v1/images/search?limit=1&size=full`)
    xhr.onload = function(){
        let imgData = JSON.parse(xhr.response);
        img.src = imgData[0].url;
        console.log(imgData[0].url)
    }
    xhr.send();
}

btn.addEventListener("click", generateImg)
