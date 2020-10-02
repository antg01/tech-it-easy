const articles = document.querySelectorAll(".main__item");

let imageurl;


    for( i = 0; i < articles.length; i++){
        articles[i].addEventListener('click', (event) => {
            imageurl = "/assets/" + event.target.id + ".jpg";
            console.log(imageurl);
        })
    }