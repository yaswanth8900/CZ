var userpat = ("[A-Za-z]+[0-9]+");
var numpat = ("/^[0-9]{10}");

var user = document.myForm.t1.value;
var numb = document.myForm.t3.value;
var pass = document.myForm.t4.value;
var cp = document.myForm.t5.value;
function validated()
{
    if (!userpat.test(user)) {
        alert("Username must contain letters and ends with numbers");
    } else if (!numpat.test(numb)) {
        alert("Phone number must be 10 digits");
    } else if (pass.length < 8) {
        alert("Password must be at least 8 characters");
    } else if (pass!=cp) {
        alert("Password and Confirm Password should be same");
    } else {
        // Proceed with form submission
        alert("Form submitted successfully");
    }
}