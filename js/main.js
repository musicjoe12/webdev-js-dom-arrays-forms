(function(){
    document.getElementById("myHeading").innerHTML ="Joe"
    document.querySelector("nav ul li").setAttribute("class", "currentPage")

    document.getElementById("myTestEvent").onClick = function(){
        console.info("Hi")
    }
})()