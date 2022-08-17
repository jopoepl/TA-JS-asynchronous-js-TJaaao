let container = document.querySelector(`.img-cont`)
let input = document.querySelector(`input`)

let photosURL = `https://api.unsplash.com/photos/?client_id=EqNrODOfSn7Ox9_kuPqj3E671fRcliVofgA91t8QN00`;
let searchURL = (search) => `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=EqNrODOfSn7Ox9_kuPqj3E671fRcliVofgA91t8QN00`

function fetchData(url){
    container.innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, url)
    xhr.onload = function(){
        let imgData = JSON.parse(xhr.response)
        console.log(imgData)
        console.log(url) ;
        console.log(imgData.results)
        if(imgData.results !== undefined) {
            for(let i=0; i<10; i++){
                let img = document.createElement(`img`)
                img.src = imgData.results[i].urls.thumb;
                container.append(img)
            }
        } else for(let i=0; i<10; i++){
            let img = document.createElement(`img`)
            img.src = imgData[i].urls.thumb;
            container.append(img)
        }
    }
    
    xhr.send();
}

fetchData(photosURL);

function handleSearch(event) {
    if(event.keyCode ===  13) {
        let search = event.target.value;
        console.log(search)
        fetchData(searchURL(search))
    }


}


input.addEventListener("keyup", handleSearch)