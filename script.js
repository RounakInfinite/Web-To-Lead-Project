let captchachecked = false;

function beforesubmit(event) {
    if (captchachecked) {
        let inputdate = document.querySelector(".inputdate");
        let outputdate = document.querySelector(".outputdate");

        console.log("Input Date: ", inputdate.value); // Log the selected date

        // Validate the input date (it should not be empty)
        if (inputdate.value === "") {
            alert("Please select a Lead Date.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Format the date to the required format (YYYY-MM-DD)
        let formattedDate = new Date(inputdate.value).toISOString().slice(0, 10);

        // Set the formatted date into the hidden field
        outputdate.value = formattedDate;
        console.log("Formatted Output Date: ", outputdate.value); // Log the formatted output date
    } else {
        // If captcha is not verified, prevent form submission
        alert("Please verify the captcha box first.");
        event.preventDefault(); // Prevent form submission
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
}

// Periodically update the captcha timestamp
setInterval(timestamp, 500);

// Handle captcha verification success
function captchasuccess() {
    captchachecked = true;
}
