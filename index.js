let btn = document.getElementById("nav");
let party = document.getElementById("party");

btn.addEventListener("click", () => {
    btn.style.display = "none";
    party.style.display = "block"
});

let button = document.querySelector('button[type="button"]');
const storageKey = "local_v2"

button.addEventListener("click", () => {
  event.preventDefault()
  let nom = document.getElementById("nom").value;
  let adresse = document.getElementById("adresse").value;
  let capacite = document.getElementById("capacite").value;
  let phone = document.getElementById("phone").value;
  let heure1 = document.getElementById("heure1").value;
  let heure2 = document.getElementById("heure2").value;

  if (nom !== "" && adresse !== "" &&
    capacite !== "" && phone !== "" &&
    heure1 !== "" && heure2 !== "") {

    btn.style.display = "block";
    party.style.display = "none";
    let table = makeTable((document.querySelector('table') === null));

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = nom;
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = heure1;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = heure2;
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = adresse;
    let row_2_data_5 = document.createElement('td');
    row_2_data_5.innerHTML = capacite;
    let row_2_data_6 = document.createElement('td');
    row_2_data_6.innerHTML = phone;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    row_2.appendChild(row_2_data_6);
    table.appendChild(row_2);

    let rows = (localStorage.getItem(storageKey) || '') + '¬' + row_2.innerHTML
    localStorage.setItem(storageKey, rows);
    alert("Formulaire envoyé !")
  }
});


function makeTable(isfirstTime) {
  let table = null;
  if (isfirstTime) {
    table = document.createElement('table');
    document.querySelector('body').appendChild(table);
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Nom de la pool party";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "heure de début";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "heure de fin";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "adresse";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "capacité";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "téléphone";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    table.appendChild(row_1);

  } else {
    table = document.querySelector('table');
  }
  return table;
}


$(function() {
  if (localStorage.getItem(storageKey) !== null) {
    let table = makeTable(true);
    var str = localStorage.getItem(storageKey)
    for (var i = 0; i < str.split('¬').length; i++) {
      if ((str.split('¬')[i] !== '')) {
        let arow = document.createElement('tr')
        arow.innerHTML = str.split('¬')[i]
        table.appendChild(arow);
      }
    }
  }
});