function eliminarTabla() {
  // get the reference for the body
  var body = document.getElementById('area');
  var tbl = document.getElementById('tabla');
  body.removeChild(tbl);
};

function crearTabla(tit, tab) {

  // get the reference for the body
  var body = document.getElementById('area');

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating titles
  // creates a table row
  var row = document.createElement("tr");

  for (var i = 0; i < tit.length; i++) {
    // Create a <th> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    var cell = document.createElement("th");
    var cellText = document.createTextNode(tit[i]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  };
  tblBody.appendChild(row);
  
  // creating all cells
  for (var i = 0; i < tab.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < tab[i].length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
//    var cellText = document.createTextNode(tabla[i][j]);
      var cellText = tab[i][j];
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);

  // sets the border attribute of tbl to 2;
  tbl.setAttribute("id", "tabla");
}