//nieuwe lege array gf
let huisdierData = [];

//loop voor de data en de favoriete huisdier in de nieuwe array pushen
for (let i = 0; i < data.length; i++) {
  huisdierData.push("<li>" + data[i]["favoriet-huisdier"] + "</li>");
}

//nieuwe variabel voor de lijst
var tekst = document.querySelector(".dataLijst");

//de nieuwe array met de huisideren wordt in de html lijst omgezet en krijgt een class hoofdletter en met css krijgt de eerste letter een hoofdletter
tekst.innerHTML = huisdierData;
tekst.classList.add("hoofdletter");
