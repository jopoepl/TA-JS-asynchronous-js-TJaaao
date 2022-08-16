let input = document.querySelector(`input`)
let profileImg = document.querySelector(`.profileimg`)
let username = document.querySelector(`h3`)
let userid = document.querySelector(`p`)
let followers = document.querySelector(`.followers`)
let following = document.querySelector(`.following`)


function displayUI(d){
    profileImg.src = d.avatar_url;
    username.innerText = d.name;
    userid.innerText = d.login;
    let name = d.login
    console.log(name)
    let followersXHR = new XMLHttpRequest();
    followersXHR.open(`GET`,  `https://api.github.com/users/${name}/followers`);
    followersXHR.onload = function(){
        console.log(`loading`)
        let followersData = JSON.parse(followersXHR.response)
        console.log(followersData)
        for(let i = 0; i<= 5; i++){
            console.log(`followers loaded`)
            let followersImg = document.createElement('img')
            followersImg.src = followersData[i].avatar_url;
            followers.append(followersImg)
        }
    }
    followersXHR.send();
    let followingXHR = new XMLHttpRequest();
    followingXHR.open(`GET`,  `https://api.github.com/users/${name}/following`);
    followingXHR.onload = function(){
        console.log(`loading`)
        let followingData = JSON.parse(followingXHR.response)
        console.log(followingData)
        for(let i = 0; i<= 5; i++){
            console.log(`following loaded`)
            let followingImg = document.createElement('img')
            followingImg.src = followingData[i].avatar_url;
            following.append(followingImg)
        }
    }
    followingXHR.send();


}
function getData(event) {
    if(event.keyCode === 13){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function(){
        let userdata = JSON.parse(xhr.response)
        displayUI(userdata)
    }
    xhr.send();

    }
    
}

input.addEventListener("keyup", getData)