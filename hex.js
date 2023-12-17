const colors=[1, 2, 3, "A", "B", "C", "D", "E", "F"];
const element=document.getElementById("mybtn");
element.addEventListener("click", myFunction);



    function myFunction()
    {
        var col="#";
        for(var i=0; i<6; i++)
        {    
             var col=col+colors[Math.round(Math.random()*(colors.length))];
        }
        console.log(col);
        document.body.style.backgroundColor=col;
        document.getElementById("bgname").innerText=col;
    }