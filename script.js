let captchachecked = false;

function beforesubmit(event) {
  if (!captchachecked) {
    alert("Please verify the captcha box first.");
    event.preventDefault(); // Stop form from submitting
  }
}

function copyDate() {
  let inputdate = document.querySelector(".inputdate");
  let outputdate = document.querySelector(".outputdate");
  if (inputdate && outputdate) {
    let formattedDate = new Date(inputdate.value).toISOString().slice(0, 10);
    outputdate.value = formattedDate;
    console.log("Date copied to hidden field:", outputdate.value);
  }
}

// This updates captcha timestamp every 500ms
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
setInterval(timestamp, 500);

function captchasuccess() {
  captchachecked = true;
}
