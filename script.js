let captchachecked = false;

function beforesubmit(event) {
    if (captchachecked) {
        // Get the input date and the hidden output date field
        let inputdate = document.querySelector(".inputdate");
        let outputdate = document.querySelector(".outputdate");

        // Check if inputdate and outputdate are valid
        if (inputdate && outputdate) {
            // Log the input value to console for debugging
            console.log("Input Date : ", inputdate.value); // String --> date (en_IN)

            // Format the date to ISO format (YYYY-MM-DD)
            let formattedDate = new Date(inputdate.value).toISOString().slice(0, 10);
            
            // Populate the hidden field with formatted date
            outputdate.value = formattedDate;

            // Log the output date to console for debugging
            console.log("Output Date : ", outputdate.value); // date (en_IN) --> String
        } else {
            console.error("Date fields are missing.");
        }
    } else {
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

// Check captcha status every 500ms
setInterval(timestamp, 500);

function captchasuccess() {
    captchachecked = true;
}
