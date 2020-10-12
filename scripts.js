function unshow(box){
	var chbox = document.getElementById('gridCheck');
    var vis = "block";
    if(chbox.checked){
    	vis = "none";
    }
    document.getElementById(box).style.display = vis;
}

function checkBlank(){
        var notBlank = true;
        if(document.getElementById('inputFirstname').value == ""){
          document.getElementById('inputFirstname').style.borderColor = "red";
          document.getElementById('invalidFirstName').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputFirstname').style.borderColor = "green";
          document.getElementById('invalidFirstName').classList.remove('d-block');
        }

        if(document.getElementById('inputLastname').value == ""){
          document.getElementById('inputLastname').style.borderColor = "red";
          document.getElementById('invalidLastname').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputLastname').style.borderColor = "green";
          document.getElementById('invalidLastname').classList.remove('d-block');
        }

        if(document.getElementById('inputUsername').value == ""){
          document.getElementById('inputUsername').style.borderColor = "red";
          document.getElementById('invalidUsername').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputUsername').style.borderColor = "green";
          document.getElementById('invalidUsername').classList.remove('d-block');
        }

        if(document.getElementById('inputEmail').value == ""){
          document.getElementById('inputEmail').style.borderColor = "green";
          notBlank = false;
        }

        if(document.getElementById('inputAddress').value == ""){
          document.getElementById('inputAddress').style.borderColor = "red";
          document.getElementById('invalidAddress').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputAddress').style.borderColor = "green";
          document.getElementById('invalidAddress').classList.remove('d-block');
        }

        if(document.getElementById('inputAddress2').value == ""){
          document.getElementById('inputAddress2').style.borderColor = "green";
          notBlank = false;
        }

        if(document.getElementById('inputCity').value == ""){
          document.getElementById('inputCity').style.borderColor = "red";
          document.getElementById('invalidCity').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputCity').style.borderColor = "green";
          document.getElementById('invalidCity').classList.remove('d-block');
        }

        if(document.getElementById('inputState').value == ""){
          document.getElementById('inputState').style.borderColor = "red";
          document.getElementById('invalidState').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputState').style.borderColor = "green";
          document.getElementById('invalidState').classList.remove('d-block');
        }

        if(document.getElementById('inputZip').value == ""){
          document.getElementById('inputZip').style.borderColor = "red";
          document.getElementById('invalidZip').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputZip').style.borderColor = "green";
          document.getElementById('invalidZip').classList.remove('d-block');
        }

        if(document.getElementById('inputNameOnCard').value == ""){
          document.getElementById('inputNameOnCard').style.borderColor = "red";
          document.getElementById('invalidNameOnCard').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputNameOnCard').style.borderColor = "green";
          document.getElementById('invalidNameOnCard').classList.remove('d-block');
        }

        if(document.getElementById('inputCreditCardNumber').value == ""){
          document.getElementById('inputCreditCardNumber').style.borderColor = "red";
          document.getElementById('invalidCreditCardNumber').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputCreditCardNumber').style.borderColor = "green";
          document.getElementById('invalidCreditCardNumber').classList.remove('d-block');
        }

        if(document.getElementById('inputExpiration').value == ""){
          document.getElementById('inputExpiration').style.borderColor = "red";
          document.getElementById('invalidExpiration').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputExpiration').style.borderColor = "green";
          document.getElementById('invalidExpiration').classList.remove('d-block');
        }

        if(document.getElementById('inputCVV').value == ""){
          document.getElementById('inputCVV').style.borderColor = "red";
          document.getElementById('invalidCVV').classList.add('d-block');
          notBlank = false;
        }
        else{
          document.getElementById('inputCVV').style.borderColor = "green";
          document.getElementById('invalidCVV').classList.remove('d-block');
        }

        return notBlank;
      }