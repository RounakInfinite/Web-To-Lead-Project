let captchachecked = false;

function beforesubmit(event) {
  if (!captchachecked) {
    alert("Please verify the captcha box first.");
    event.preventDefault();
    return;
  }

  let inputdate = document.querySelector(".inputdate");
  console.log("Input Date : ", inputdate.value);

  // Format date properly
  let formattedDate = new Date(inputdate.value).toISOString().slice(0, 10);
  inputdate.value = formattedDate;

  console.log("Formatted Date : ", inputdate.value);
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchachecked = true;
}
