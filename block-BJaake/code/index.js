let body = document.querySelector(`body`)
let cont = document.querySelector(`.cont`)
let data = "";
let a = document.querySelector(`a`)
let newsSource = document.querySelector(`select`)



function createUI(data){
    for(let i =0; i< data.length; i++) {
        let article =  document.createElement(`article`)
        let img =  document.createElement(`img`);
        img.src = data[i].imageUrl
        let textCont =  document.createElement(`div`)
        textCont.classList.add(`text-cont`)
        let site =  document.createElement(`span`)
        site.innerText = data[i].newsSite
        let title =  document.createElement(`h3`)
        title.innerText = data[i].title
        let readMore =  document.createElement(`a`)
        readMore.innerText = "Read More"
        readMore.href = data[i].url;
       
        textCont.append(site, title, readMore)
        article.append(img, textCont)
        cont.append(article)
    }
}

// function handleNewsSource(e){
//     console.log(event)
//     let source = e;
//     console.log(data)
//     let filteredData = data.filter((val) => val === source)
//     createUI(filteredData)
// }

function fetchData(url){
    fetch(url).then((res) => res.json()).then((data) => {
        createUI(data)
        newsSource.addEventListener("change", (event) => {
            let source = event.target.value;
         let filteredData = data.filter((val) => val.newsSite === source)
         cont.innerHTML = "";
          createUI(filteredData)
        })
    }) 
}
fetchData(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`)