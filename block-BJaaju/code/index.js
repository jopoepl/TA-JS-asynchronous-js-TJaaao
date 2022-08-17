let container = document.querySelector(`.img-cont`)
let input = document.querySelector(`input`)


function displayUI(){
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, `https://api.unsplash.com/photos/?client_id=EqNrODOfSn7Ox9_kuPqj3E671fRcliVofgA91t8QN00`)
    xhr.onload = function(){
        let imgData = JSON.parse(xhr.response)
        console.log(imgData)
        console.log(imgData[1].urls.small) ;
        for(let i=0; i<10; i++){
            let img = document.createElement(`img`)
            img.src = imgData[i].urls.small;
            container.append(img)
        }
    }
    
    xhr.send();
}

displayUI();

function handleSearch(event) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.unsplash.com/search/photos?page=1&query=office?client_id=EqNrODOfSn7Ox9_kuPqj3E671fRcliVofgA91t8QN00`)

}