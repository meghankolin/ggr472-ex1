function clicked() {
    console.log("You clicked me")
}

//Event listener function
var button = document.getElementById("my-btn");

button.addEventListener("click", function(){
    alert("You clicked me!");
})

//This is for the happy button I made
var button = document.getElementById("happy-btn");

button.addEventListener("click", function(){
    alert("You have clicked on the serotonin button! You get one molecule of serotonin and the button hopes you have a great day :)")
})