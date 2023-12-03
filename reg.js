var userpat = /^[A-Za-z]+[0-9]+$/;
var numpat = /^[0-9]{10}$/;
var form = document.forms['valid'];
var user = form['t1'].value;
var numb = form['t3'].value;
var pass = form['t4'].value;
var cp = form['t5'].value;
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