const inputDiv = document.querySelector(".inputDiv");
const input = document.getElementById("input");
const button = document.getElementById("button");
const contentDiv = document.querySelector(".deneme");
const button2 = document.getElementById("button2");

button.addEventListener('click', go);
button2.addEventListener("click", critic);

var sayac = 1;

function go() {
    if (input.value !== "") {
        var paragraf = document.createElement("p");
        paragraf.innerText = sayac + "- " + input.value;
        sayac++;

        // Paragraf için silme butonu oluştur
        var deleteButton = document.createElement('div');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = "Sil";
        deleteButton.addEventListener("click", function() {
            contentDiv.removeChild(paragraf);
        });

        // Paragrafa silme butonunu ekle
        paragraf.appendChild(deleteButton);
        contentDiv.appendChild(paragraf);

        input.value = "";
    }
}

function critic() {
    if (input.value !== "") {
        var paragraf = document.createElement("p");
        paragraf.style.color = "red";
        paragraf.innerText = sayac + "- " + input.value.toUpperCase();
        sayac++;

        // Paragraf için silme butonu oluştur
        var deleteButton = document.createElement('div');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = "Sil";
        deleteButton.addEventListener("click", function() {
            contentDiv.removeChild(paragraf);
        });

        // Paragrafa silme butonunu ekle
        paragraf.appendChild(deleteButton);
        contentDiv.appendChild(paragraf);

        input.value = "";
    }
}
