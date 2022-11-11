(function(){
    document.getElementById("myHeading").innerHTML ="Joe"
    document.querySelector("nav ul li").setAttribute("class", "currentPage")

    document.getElementById("myTestEvent").addEventListener("click", function(){
        console.info("I was clicked")
    })

    let bodyElement = document.querySelector("body")
    let colourBtns = document.querySelectorAll(".colPicker")
    for(let i=0; i<colourBtns.length; i++){
        colourBtns[i].addEventListener("click", chgColour)
    }
    function chgColour(ev){
        let newColour = ev.target.classList[0] + "Back"
        if(newColour)
    }
})()