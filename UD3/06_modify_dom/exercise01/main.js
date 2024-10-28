window.onload = function(e) {
    console.log('documento cargado')

    document.querySelectorAll("h2")[1].innerText = "Cambiado";

    document.getElementById("username");


    document.querySelectorAll("article .first").forEach(element => {
        element.style.color = "#3498db";
      });

      const listItems = document.querySelectorAll("li.item");

      const buttons = document.querySelectorAll(".buttons button");

      document.querySelector("p").style.backgroundColor = "#0000db"; 


      buttons.forEach(button => {
        button.style.color = "#1111db"; // Cambia "nuevoColorFrente" por el color que prefieras
      });
        //document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}