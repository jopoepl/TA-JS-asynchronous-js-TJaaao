function loadImage(url) {
    return new Promise((res, rej) => {
     let img = new Image();
     img.addEventListener("load" , () => res(img))
    img.addEventListener("error" , () => rej(img))
    img.src = url;
    
     })
     
      
    }
    loadImage('https://images.unsplash.com/photo-1614157510257-968fb5129989')
      .then((img) => {
        document.body.append(img);
        console.log(`w: ${img.width} | h: ${img.height}`);
      })
      .catch((err) => console.error(err));