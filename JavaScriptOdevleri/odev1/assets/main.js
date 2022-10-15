let getName = prompt("Lütfen İsminizi Giriniz")
let nameText = document.querySelector("#myName")
nameText.innerHTML = `${getName}`

function showTime() {
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    var date = new Date().toLocaleTimeString();
    var date2 = new Date().getDay();
    document.getElementById("myClock").innerHTML = date + " " + days[date2];
    
}

setInterval(() => {
    showTime();
}, 1000);
