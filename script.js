//var offsets = document.getElementsById("header").getBoundingClientRect();
//var top = offsets.top;
//var left = offsets.left;
//console.log(offsets)




//function getPos(header) {
    // yay readability
    //for (var lx=0, ly=0;
         //header != null;
         //lx += header.offsetLeft, ly += header.offsetTop, header = header.offsetParent);
    //return {x: lx,y: ly};
//}


// 1 - Recupérer la position du bottom du header
const header = document.getElementById("header")
let bottomHeaderPosition = header.offsetTop
console.log(bottomHeaderPosition)

// 2 - Get scroll event on page
// --> console.log(" i am scrolling "") add listener on body or window ?



window.addEventListener('scroll', (event) => {
    const header  = window.scrollY
    console.log(header);
});




// 3 - Get window position while scrolling

