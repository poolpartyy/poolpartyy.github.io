let btn = document.getElementById("nav");
let party = document.getElementById("party");
let retour = document.getElementById("retour");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  party.style.display = "block";
  retour.style.display = "block";
});

retour.addEventListener("click", () => {
  btn.style.display = "block";
  party.style.display = "none";
  retour.style.display = "none";
})

let button = document.querySelector('button[type="button"]');
const storageKey = "local_v3.7"

button.addEventListener("click", () => {
  event.preventDefault()
  let jour = document.getElementById("jour").value;
  let adresse = document.getElementById("adresse").value;
  let capacite = document.getElementById("capacite").value;
  let phone = document.getElementById("phone").value;
  let heure1 = document.getElementById("heure1").value;
  let heure2 = document.getElementById("heure2").value;

  if (jour !== "" && adresse !== "" &&
    capacite !== "" && phone !== "" &&
    heure1 !== "" && heure2 !== "") {

    btn.style.display = "block";
    party.style.display = "none"
    let table = document.createElement('table');
    const ref = document.getElementById("res");

    ref.insertBefore(table, ref.children[0]);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Date";
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

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = jour;
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
    let tables = ''

    document.querySelectorAll('table')
      .forEach(function myFunction(item, index, arr) {
        tables += item.outerHTML;
        return item.outerHTML;
      })

    retour.style.display = "none";  
    localStorage.setItem(storageKey, tables);
    alert("Pool Party publiée !")
    document.getElementById("jour").value = "";
    document.getElementById("adresse").value = "";
    document.getElementById("capacite").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("heure1").value = "";
    document.getElementById("heure2").value = "";
  }
});
var support = (function() {
  if (!window.DOMParser) return false;
  var parser = new DOMParser();
  try {
    parser.parseFromString('x', 'text/html');
  } catch (err) {
    return false;
  }
  return true;
})();
var stringToHTML = function(str) {
  // If DOMParser is supported, use it
  if (support) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  }
  // Otherwise, fallback to old-school method
  var dom = document.createElement('div');
  dom.innerHTML = str;
  return dom;
};

$(function() {
  if (localStorage.getItem(storageKey) !== null) {
    var str = localStorage.getItem(storageKey)
    var doc = stringToHTML(str)
    var tbls = Array.from(doc.children)
    for (var count = 0; count < tbls.length; count++) {
      //console.log(count + ': ' + tbls[count].innerHTML);
      document.getElementById('res').appendChild(tbls[count]);
    }
  }
});
