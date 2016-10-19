    var theInput = document.getElementById("favcolor");
    var theColor = theInput.value;
    var par = document.getElementById("hex");
    
    theInput.addEventListener("input", function() {
    
    document.getElementById("hex").innerHTML = theInput.value; //wybrany kolor w hex, np. #ffffff
    par.style.color=theInput.value; //zmiana koloru tekstu na ten wybrany
    
    }, false);
    
