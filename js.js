

let qrText = document.getElementById("qr-text");
let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qr-img");



function generateQR(){

    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        // console.log(qrImage.src);
        imgBox.classList.add("show-img");
    } else {
        // add and remove shake class for 1 second
        qrText.classList.add("error");
        setTimeout(()=> {
            qrText.classList.remove("error");
        }, 1000)
    }
    
}