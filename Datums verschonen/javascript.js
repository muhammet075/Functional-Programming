//nieuwe lege favoriet datum array
let favorietDatum = [];

//loopen voor de favoriete datum in de json bestand
for (let i = 0; i < data.length; i++) {
    //de dag en de maand worden omgewisseld omdat javascript amerikaanse tijd aanhoudt anders klopt het niet
    var wijzigData = data[i]["favoriet-datum"].substr(3, 2) + "/" + data[i]["favoriet-datum"].substr(0, 2) + "/" + data[i]["favoriet-datum"].substr(6, 4);
    console.log(wijzigData);
    //de gewijzigde datum wordt in de nieuwe array gepusht
    favorietDatum.push(wijzigData);
}

// nieuwe array voor de volledige uitgeschreven datum
let nieuwDatum = [];

for (let i = 0; i < favorietDatum.length; i++) {
    //alle gewijzigde favoriete datums worden geloopt en wordt door javascript als tekst uitgeschreven
    var dateString = favorietDatum[i]
    var dateObject = new Date(dateString)
    //de uitgeschreven datum tekst wordt in de nieuwe array gepusht
    nieuwDatum.push("<li>" + dateObject + "</li>");
}

//in html lijst wordt het weegegeven
document.querySelector(".dataLijst").innerHTML = nieuwDatum;