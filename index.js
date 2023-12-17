const colors=["aquamarine","midnightblue", "goldenrod", "hotpink","chocolate", "black", "greenyellow", "orange", "mediumpurple"];
const element=document.getElementById("mybtn");
element.addEventListener("click", myFunction);

    function myFunction()
    {
        document.body.style.backgroundColor=colors[Math.round(Math.random()*colors.length)];
    }

