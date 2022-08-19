let container = document.querySelector(`.todo-cont`);
let input = document.querySelector(`input`);
let ul = document.querySelector(`ul`);
let url = "https://basic-todo-api.vercel.app/api/todo"


function displayUI(data){
    data.todos.forEach((todo => {
        let checkDone = document.createElement(`input`);
        checkDone.type = "checkbox";
        checkDone.checked = todo.isCompleted
        checkDone.classList.add(`checkbox`)
        checkDone.setAttribute("dataid", todo._id)
        checkDone.addEventListener("click", (e) => {
            handleCheck(e)
        })
        let li = document.createElement(`li`)
        let p = document.createElement(`p`)
        p.innerText = todo.title;
        p.addEventListener(`dblclick`, (e)=> {
            let input = document.createElement(`input`)
            let parent = e.target.parentElement
            input.placeholder = p.innerText
            parent.replaceChild(input, p)
            input.addEventListener("keyup", (e) => {
            if(e.keyCode === 13){
                console.log(e.target.value)
                let data = {
                    todo: {
                      title: e.target.value,
                    }
                  }
                fetch(url + `/${todo._id}`, {
                    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                  }).then(()=> {
                    ul.innerHTML = "";
                    fetchData();
                  })

                
            }
            })
            console.log()
        
            
        })
        let del = document.createElement(`span`)
        del.innerText = "❌"
        del.setAttribute("dataid", todo._id)
        del.addEventListener("click", (e) => {
            handleDel(e)
        })
        li.append(checkDone, p, del);
        ul.append(li)
    }))

}

input.addEventListener("keyup", (e)=> {
    if(e.keyCode === 13){
        addTodo(e)
    }
})



function addTodo(e){
    let data = {
        todo: {
          title: e.target.value,
          isCompleted: false,
        }
      }
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(()=> {
        ul.innerHTML = "";
        fetchData();
      })

}

function handleCheck(e){
    let data = {
        todo: {
          isCompleted: e.target.checked
        }
      }

    fetch(url + `/${e.target.attributes.dataid.value}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

}

function handleDel(e){
    fetch(url + `/${e.target.attributes.dataid.value}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      }).then(() => {
        ul.innerText = "";
    fetchData();
      })
    
}



function fetchData(){
    fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      }).then(res => res.json()).then(info => {
        displayUI(info);
      })
}

fetchData();