function createPhoneNumber(numbers){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    var telephoneFormat = "(";
    
    for(var i; i = 0; i < numbers.Length + 1){
        telephoneFormat = "("
        {
            telephoneFormat =+ numbers[i]; 
        }
        if (i = 3)
        {
            telephoneFormat =+ ") ";
        }
        if (i = 6)
        {
            telephoneFormat =+ "-";
        }
    } 
    return telephoneFormat;            
}

function changeText(){
    var phone;
    
    document.getElementById("demoText").innerHTML = "Robert Dannelly JavaScript Guru!!!";
    createPhoneNumber();
    document.getElementById("phone").innerHTML = phone;
}