function beforesubmit(){
    let inputdate = document.querySelector(".inputdate")
    let outputdate = document.querySelector(".outputdate")
    console.log("Input Date : ", inputdate.value) // String --> date (en_IN)
    
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN")
    outputdate.value = formattedDate
}