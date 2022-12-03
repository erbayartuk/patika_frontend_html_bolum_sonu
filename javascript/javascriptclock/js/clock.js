adgir = prompt("Adınızı Girin:");

let adgoster = document.querySelector("#myName");

adgoster.innerHTML = adgir;

function showTime() {
  let date = new Date();
  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
  };

  let dateFull = date.toLocaleDateString("tr-TR", options);
  let dategoster = document.querySelector("#myClock");

  dategoster.innerHTML = dateFull;

  setTimeout(showTime, 1000);
}

showTime();
