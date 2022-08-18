let body = document.querySelector(`body`);
let cont = document.querySelector(`.books-cont`)
let close = document.createElement(`span`)
close.innerText ="CLOSE"
close.classList.add(`close`)



function displayBooks(book){
    let title = document.createElement(`h3`)
    title.innerText = book.name
    let author = document.createElement(`span`)
    author.innerText = book.authors[0]
    let characters = document.createElement(`a`)
    characters.dataset.value = JSON.stringify(book.characters)
    // console.log(book.characters, "books charac")
    // console.log(characters.dataset.value, "dataset charac")
    characters.innerText = `Total Characters ${book.characters.length}`
    characters.addEventListener("click", (e)=> {
        cont.innerHTML = ""
        console.log(e.target.dataset.value, "charac url")
        let data = JSON.parse(e.target.dataset.value)
        data.forEach((characterurl) => {
            let container = document.createElement(`div`)
            container.classList.add(`container`)
            let ul = document.createElement(`ul`)
            let name = document.createElement(`li`)
            let alias = document.createElement(`li`)
            fetch(characterurl).then(res => res.json()).then(val => {
                name.innerText = `Name: -- ${val.name}`
                alias.innerText = `Alias: -- ${val.aliases}`
            })
            ul.append(name, alias)
            container.append(ul)
            cont.append(container)
            
        })
        cont.prepend(close)
        
    })
    let box = document.createElement(`article`)
    box.append(title, author, characters)
    cont.append(box)

}



fetch(`https://www.anapioficeandfire.com/api/books`).then(res => res.json()).then(books => {
    books.forEach((book) => {
        displayBooks(book)
    })
    close.addEventListener("click", ()=> {
        cont.innerHTML = ""
        books.forEach((book) => {
            displayBooks(book)
        })
    })
})

