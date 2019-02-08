function opinion(){
    var input = document.getElementById('opinion').value;
    if(input.length > 6){
        alert("This has been saved: " + input);
    } else if(input.length < 20){
        alert("That is not over 20 characters");
    }
}