let favorietAuto = [];

for (let i = 0; i < data.length; i++) {

    //na de spatie worden de andere woorden gewist, alles merk namen worden naar kleine letters omgezet en bij elkaar opgeteld later, sommige waren in hoofdletters opgeschreven dus waren er 2 vormen van merken
    var nieuwNaam = data[i]["favoriet-auto"].split(" ")[0].toLowerCase();

    favorietAuto.push(nieuwNaam);
}

console.log(favorietAuto);


//de merken worden opgeteld
var opTellen = {};
favorietAuto.forEach(function (i) {
    opTellen[i] = (opTellen[i] || 0) + 1;
});

console.log(opTellen);




document.querySelector(".dataLijst").innerHTML = JSON.stringify(opTellen);
