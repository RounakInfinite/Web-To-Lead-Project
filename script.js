let captchachecked = false;
function beforesubmit(event) {
  if (captchachecked) {
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("Input Date : ", inputdate.value); // String --> date (en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
    console.log("Output Date : ", outputdate.value); // date (en_IN) --> String
  } else {
    alert("Please verify the captcha box first.");
    event.preventDefault(); // Prevent form submission
  }
}
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
      //console.log("Captcha settings updated with timestamp.");
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchachecked = true;
}
