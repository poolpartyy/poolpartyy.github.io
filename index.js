let button = document.querySelector('button[type="submit"]') 

button.addEventListener("click", () => {

    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("adresse", document.querySelector("#adresse").value);
    localStorage.setItem("capacite", document.querySelector("#capacite").value);
    localStorage.setItem("phone", document.querySelector("#phone").value);
    localStorage.setItem("heure1", document.querySelector("#heure1").value);
    localStorage.setItem("heure2", document.querySelector("#heure2").value);
    
    if (document.querySelector("#nom").value !== "" && document.querySelector("#adresse").value !== "" && document.querySelector("#capacite").value !== "" && document.querySelector("#phone").value !== "" && document.querySelector("#heure1").value !== "" && document.querySelector("#heure2").value !== "") {
 
        
        
    }
});



