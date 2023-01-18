function clicked() {
    console.log("You clicked me")
}

//Event listener function
var button = document.getElementById("my-btn");

button.addEventListener("click", function(){
    alert("You clicked me!");
})