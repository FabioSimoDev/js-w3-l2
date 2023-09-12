/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
const title = document.getElementsByTagName("h1")[0];

const changeTitle = function (newTitle) {
  title.textContent = newTitle;
};
changeTitle("Nuovo titolo");

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function (title) {
  title.classList.add("myHeading");
};

addClassToTitle(title);

/* ESERCIZIO 3
       Scrivi una funzione per che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  const divP = document.querySelectorAll("div > p");
  divP.forEach((element) => {
    element.textContent = "paragrafo cambiato";
  });
};

changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  const links = document.querySelectorAll("a:not(footer a)");

  links.forEach(function (link) {
    link.href = "https://www.google.com";
  });
};
changeUrls();

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const ul = document.getElementById("secondList");
  const newItem = document.createElement("li");
  newItem.textContent = "nuovo elemento li";
  ul.appendChild(newItem);
};
addToTheSecond();

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un secondo paragrafo al primo div
    */

const addParagraph = function () {
  const firstDiv = document.querySelector("div");
  const newP = document.createElement("p");
  newP.textContent = "nuovo paragrafo";
  firstDiv.appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const firstUl = document.querySelector("ul");
  if (firstUl) {
    firstUl.style.display = "none";
  }
};
hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const ulElements = document.querySelectorAll("ul");
  ulElements.forEach((ul) => {
    ul.style.backgroundColor = "green";
  });
};
paintItGreen();

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const h1Element = document.querySelector("h1");
  if (h1Element) {
    h1Element.addEventListener("click", () => {
      h1Element.textContent = h1Element.textContent.slice(0, -1);
    });
  }
};
makeItClickable();

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footerElement = document.querySelector("footer");
  if (footerElement) {
    footerElement.addEventListener("click", () => {
      const internalLink = document.querySelector("a");
      if (internalLink) {
        alert(internalLink.href);
      }
    });
  }
};
revealFooterLink();

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const tableArea = document.getElementById("tableArea");
  if (tableArea) {
    const table = document.createElement("table");
    table.innerHTML = `
      <tr>
        <th>Immagine</th>
        <th>Nome Prodotto</th>
        <th>Quantità</th>
        <th>Prezzo</th>
      </tr>
    `;
    tableArea.appendChild(table);
  }
};
generateTable();

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function (imageSrc, productName, quantity, price) {
  const table = document.querySelector("table");
  if (table) {
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = `<img src="${imageSrc}" alt="Product Image">`;
    cell2.innerHTML = productName;
    cell3.innerHTML = quantity;
    cell4.innerHTML = price;
  }
};
addRow();

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const tableImages = document.querySelectorAll("table img");
  tableImages.forEach((img) => {
    img.style.display = "none";
  });
};
hideAllImages();

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
  const h2Element = document.getElementById("changeMyColor");
  if (h2Element) {
    h2Element.addEventListener("click", () => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      h2Element.style.color = randomColor;
    });
  }
};
changeColorWithRandom();

/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

const deleteVowels = function () {
  const removeVowelsFromString = (str) => {
    return str.replace(/[aeiouAEIOU]/g, "");
  };

  const traverseAndRemoveVowels = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const textWithoutVowels = removeVowelsFromString(text);
      node.textContent = textWithoutVowels;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.childNodes.forEach((child) => {
        traverseAndRemoveVowels(child);
      });
    }
  };

  const body = document.body;
  traverseAndRemoveVowels(body);
};

deleteVowels();
