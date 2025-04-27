let captchachecked = false;

function beforesubmit(event) {
    if (captchachecked) {
        let inputdate = document.querySelector(".inputdate");
        let outputdate = document.querySelector(".outputdate");

        // Check if both inputdate and outputdate elements exist in the DOM
        if (inputdate && outputdate) {
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
            console.error("Date fields are missing in the form.");
        }
    } else {
        // If captcha is not verified, prevent form submission
        alert("Please verify the captcha box first.");
        event.preventDefault(); // Prevent form submission
    }
}

// Function to update timestamp for captcha settings (this is a workaround for captcha time-based validation)
function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value =
            JSON.stringify(elems);
    }
}

// Continuously update the timestamp for the captcha settings
setInterval(timestamp, 500);

// Set captcha success flag when the captcha is verified
function captchasuccess() {
    captchachecked = true;
}
