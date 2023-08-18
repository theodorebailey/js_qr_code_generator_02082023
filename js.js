
// access our text box
let qrText = document.getElementById("qr-text");
// qr image box
let imgBox = document.getElementById("img-box");
// qr image to populate 
let qrImage = document.getElementById("qr-img");


// our function generate
function generateQR(){

    // if qr text value length is greater than 0
    // if user has placed input
    if (qrText.value.length > 0) {
        // access our qrImage element and assign our src as
        // api server + qrText.value == user input
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        // console.log(qrImage.src);
        // add a classList to imgBox as show-img 
        imgBox.classList.add("show-img");
    } else {
        // add and remove shake class for 1 second
        // create shale functionality
        qrText.classList.add("error");
        // setTimeout 
        setTimeout(()=> {
            // remove error after 1 second
            // error class is an animation which translates left and right
            qrText.classList.remove("error");
        }, 1000)
    }
    
}