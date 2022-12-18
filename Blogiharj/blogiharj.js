  function lisääViesti() {
    var nimi = document.getElementById("nimi").value;
    var viesti = document.getElementById("viesti").value;

    var nimiItem = document.createElement("li");
    nimiItem.innerHTML = "Nimi: " + nimi;

    var viestiItem = document.createElement("li");
    viestiItem.innerHTML = "Viesti: " + viesti;

    document.getElementById("viestiLista").appendChild(nimiItem);
    document.getElementById("viestiLista").appendChild(viestiItem);
  }

