let btn = document.getElementById("nav");
let party = document.getElementById("party");

btn.addEventListener("click", () => {
    btn.style.display = "none";
    party.style.display = "block"
});

let button = document.querySelector('button[type="button"]');

button.addEventListener("click", () => {

    let nom = document.getElementById("nom").value;
    let adresse = document.getElementById("adresse").value;
    let capacite = document.getElementById("capacite").value;
    let phone = document.getElementById("phone").value;
    let heure1 = document.getElementById("heure1").value;
    let heure2 = document.getElementById("heure2").value;

    
    if (nom !== "" && adresse !== "" && capacite !== "" && phone !== "" && heure1 !== "" && heure2 !== "") {
 
        
        console.log("");
        ntable = 1;
        let table = document.createElement('table');

        document.querySelector('body').appendChild(table);

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('td');
        heading_1.innerHTML = "Nom de la pool party";
        let heading_2 = document.createElement('td');
        heading_2.innerHTML = "heure de début";
        let heading_3 = document.createElement('td');
        heading_3.innerHTML = "heure de fin";
        let heading_4 = document.createElement('td');
        heading_4.innerHTML = "adresse";
        let heading_5 = document.createElement('td');
        heading_5.innerHTML = "capacité";
        let heading_6 = document.createElement('td');
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

        table.style.background = "white";
        table.style.color = 'black';
        table.style.textAlign = "center";
        table.style.border = "1px solid black";
        row_1.style.border = "1px solid black";
        row_2.style.border = "1px solid black";
        alert("Formulaire envoyé !")
}

});