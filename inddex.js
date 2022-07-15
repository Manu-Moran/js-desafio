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


/* me deje esto del tp anterior pero no creo usarlo jsjs
function total (precio, cantidad){
    return precio * cantidad;
  }
  
  function precioIva (resultado){
      return resultado + resultado * 0.21
  }
    
  {let cantidad = prompt("ingrese cuantos patos quiere, valen 150");
  let resultado = total(150, cantidad);
  let precioPostIva = precioIva(resultado)
  alert(`el precio neto es ${resultado} pesos y el precio post-iva es de ${precioPostIva}`);}
  
  
  {let cantidad = prompt("ingrese cuantos gatos quiere, valen 200");
  let resultado = total(200, cantidad);
  let precioPostIva = precioIva(resultado)
  alert(`el precio neto es ${resultado} pesos y el precio post-iva es de ${precioPostIva}`);}
  
  
  {let cantidad = prompt("ingrese cuantos perros quiere, valen 400");
  let resultado = total(400, cantidad);
  let precioPostIva = precioIva(resultado)
  alert(`el precio neto es ${resultado} pesos y el precio post-iva es de ${precioPostIva}`);}
*/

const productos = [
    {nombre: "comida 1", precio: 1000, animal: "perro", vendido: false},
    {nombre: "comida 2", precio: 800, animal: "perro", vendido: false},
    {nombre: "comida 3", precio: 900, animal: "gato", vendido: false},
    {nombre: "comida 4", precio: 700, animal: "gato", vendido: false},
    {nombre: "comida 5", precio: 500, animal: "pez", vendido: false},

    {nombre: "juguete1", precio: 1800, animal: "gato", vendido: false},
    {nombre: "juguete1", precio: 1500, animal: "gato", vendido: false},
    {nombre: "juguete2", precio: 2000, animal: "perro", vendido: false},
    {nombre: "juguete2", precio: 2400, animal: "perro", vendido: false},
    //no se como jugaran los peces...

    {nombre: "medicamento 1", precio: 450, animal: "perro", vendido: false},
    {nombre: "medicamento 2", precio: 450, animal: "gato", vendido: false},
    {nombre: "medicamento 3", precio: 300, animal: "pez", vendido: false},

];


let filtro = prompt ("de que manera quiere fltrar el catalogo (mascota/item/precio)? lo encontraras en la consola")
switch (filtro) {
    case "item":
        let busqueda1 = prompt ("escriba que tipo de item quiere (comida/juguete/medicamento)")
        const filtro1 = productos.filter((el) => el.nombre.includes(busqueda1))
        
        console.log(filtro1);
        break;

    case "mascota":

        let busqueda2 = prompt ("escriba que mascota tiene (perro/gato/pez)") 
        const filtro2 = productos.filter((el) => el.animal.includes(busqueda2))
        
        console.log(filtro2);
        break;
    
    case "precio":
        let busqueda3 = prompt ("escriba el precio maximo")
        const filtro3 = productos.filter((el) => el.precio <= (busqueda3)) //elimina todo item de precio mayor a busqueda3
        let busqueda4 = prompt ("escriba el precio minimo") 
        const filtro4 = filtro3.filter((el) => el.precio >= (busqueda4)) //elimina todo item (sobrante del anterior filtro) de precio menor a busqueda4
        
        console.log(filtro4);
        break;
    

    default:
        alert("disculpe no tenemos ese metodo")
        break;
}

const carrito = [];

const precioTotal = carrito.reduce ((pepe, el) => pepe + el.precio, 0)
console.log (precioTotal);

