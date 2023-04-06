
var getQRCode = document.querySelector('#getQRCode-btn')
var requestQRCodeURL = ""


function getApiQRCode(event) {
event.preventDefault();


var requestQRCodeUrl = 'http(s)://api.qrserver.com/v1/create-qr-code/?data=[https://www.google.com]&size=[100]x[100]';
fetch(requestQRCodeUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);

    });
}