(function(){
    document.getElementById("myHeading").innerHTML ="Joe"
    document.querySelector("nav ul li").setAttribute("class", "currentPage")

    document.getElementById("myTestEvent").addEventListener("click", function(){
        console.info("I was clicked")
    })

    document.querySelector(".red").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class', "redBack");
    })
       
    document.querySelector(".green").addEventListener('click', function(ev){
            document.querySelector('body').setAttribute('class', "greenBack");
    })
    document.querySelector(".blue").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class', "blueBack");
    })
    document.querySelector(".default").addEventListener('click', function(ev){
        document.querySelector('body').removeAttribute('class');
    })
})()