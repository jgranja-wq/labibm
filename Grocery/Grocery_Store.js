let articulo1;
let articulo2;
let articulo3;

function calculatePrice() {
 articulo1 = parseFloat(document.getElementById('articulo1').value);
 articulo2 = parseFloat(document.getElementById('articulo2').value);
 articulo3 = parseFloat(document.getElementById('articulo3').value);

 let precio1 = articulo1 * 56.99;
 let precio2 = articulo2 * 34.99;
 let precio3 = articulo3 * 12.66;
 let total = precio1 + precio2 + precio3
  document.getElementById('result').innerText = `el precio a pagar es: ${total}`;

}

