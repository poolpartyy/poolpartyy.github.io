let btn = document.getElementById("nav");
let party = document.getElementById("party")
let number = 0
btn.addEventListener("click", () => {
    btn.style.display = "none";
    party.style.display = "block"
});

let button = document.querySelector('button[type="submit"]');

button.addEventListener("click", () => {

    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("adresse", document.querySelector("#adresse").value);
    localStorage.setItem("capacite", document.querySelector("#capacite").value);
    localStorage.setItem("phone", document.querySelector("#phone").value);
    localStorage.setItem("heure1", document.querySelector("#heure1").value);
    localStorage.setItem("heure2", document.querySelector("#heure2").value);
    
    
    if (document.querySelector("#nom").value !== "" && document.querySelector("#adresse").value !== "" && document.querySelector("#capacite").value !== "" && document.querySelector("#phone").value !== "" && document.querySelector("#heure1").value !== "" && document.querySelector("#heure2").value !== "") {
 
        
        console.log("")
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);

        document.getElementById('body').appendChild(table);

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
        thead.appendChild(row_1);


        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = document.querySelector("#nom").value;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = document.querySelector("#heure1").value;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = document.querySelector("#heure2").value;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = document.querySelector("#adresse").value;
        let row_2_data_5 = document.createElement('td');
        row_2_data_5.innerHTML = document.querySelector("#capacite").value;
        let row_2_data_6 = document.createElement('td');
        row_2_data_6.innerHTML = document.querySelector("#phone").value;

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        row_2.appendChild(row_2_data_6);
        tbody.appendChild(row_2);

        table.style.background = 'white';
        table.style.color = 'black';        
    }

});



