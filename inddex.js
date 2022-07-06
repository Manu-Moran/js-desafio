let persona = prompt("buen dia, es usted un cliente o un empleado?");
let i = 0

while (persona != "cliente"){
switch (persona) {
    case "cliente":
        break;

    case "empleado":
        alert("mentira, no tenemos empleados");
        break;

    default:
        alert("prueba otra vez");
        break;
}
i = i + 1
persona = prompt("buen dia, es usted un cliente o un empleado?");
}

let saludo = "te costo " + i + " intentos"
alert (saludo)

function total (precio, cantidad){
    return precio * cantidad;
  }
  
  function precioIva (resultado){
      return resultado + resultado * 0.21
  }
  
  /* aca va el bloque de la compra de patos */
  {let cantidad = prompt("ingrese cuantos patos quiere, valen 150");
  let resultado = total(150, cantidad);
  let precioPostIva = precioIva(resultado)
  alert(`el precio neto es ${resultado} pesos y el precio post-iva es de ${precioPostIva}`);}
  
  /* aca va el bloque de la compra de gatos */
  {let cantidad = prompt("ingrese cuantos gatos quiere, valen 200");
  let resultado = total(200, cantidad);
  let precioPostIva = precioIva(resultado)
  alert(`el precio neto es ${resultado} pesos y el precio post-iva es de ${precioPostIva}`);}
  
  /* aca va el bloque de la compra de perro */
  {let cantidad = prompt("ingrese cuantos perros quiere, valen 400");
  let resultado = total(400, cantidad);
  let precioPostIva = precioIva(resultado)
  alert(`el precio neto es ${resultado} pesos y el precio post-iva es de ${precioPostIva}`);}