function createPhoneNumber(numbers){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    var telephoneFormat = "(";
    
    for(var i = 0; i < numbers.length; i++){
        if(i === 3){
        telephoneFormat += ") ";
        }
        else if(i === 6)
        {
            telephoneFormat += "-";
        }
        telephoneFormat += numbers[i];
    } 
    return telephoneFormat;            
}

function changeText(){
    var phone;
    
    document.getElementById("demoText").innerHTML = "Robert Dannelly JavaScript Guru!!!";
    
    document.getElementById("phone").innerHTML = createPhoneNumber();
}