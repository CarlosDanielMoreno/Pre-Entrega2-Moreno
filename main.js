class comboCola{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const comboColas = [];




while (true) {
    const opcion = prompt('Bienvenido a cine cola que desea :\n1. comprar\n2. Consulta total\n3. Quitar articulo');

    if (opcion === '1') {
        combo();
    } else if (opcion === '2') {
        consultarCombos();
    }else if (opcion === '3') {
        eliminarArticulo();
    } else {
        alert('Opcion Invalida');
    }
}





function combo(){

const nombre = prompt("¿Que desea comprar : ?");

while (true) {   
    var precio = parseFloat(prompt('Cual es el precio del producto')); 
    if (isNaN(precio)) {
        alert("Debe Ingresar el precio")
    }
    if (!isNaN(precio)) {
        break
    }
}


let nuevoCombo = new comboCola(nombre,precio);
comboColas.push(nuevoCombo);
alert("se añadio con exito el combo ");
console.log(comboColas);

}

function consultarCombos(){
if(comboColas.length === 0){
    alert("No tienes ningun combo");
    return;
}
let contenido = "combos agregados: \n\n";
let sumaPrecio = 0;
comboColas.forEach(item => {
    contenido += item.nombre + ": Precio:" + item.precio + "\n";
    sumaPrecio += item.precio;
  
});
contenido += "\ntotal de pagar de los combos\n";
contenido += "combo total: $"+sumaPrecio;
alert(contenido); 
}








function eliminarArticulo(){
if(comboColas.length === 0){
    alert("no tiene ningun combo");
    return;
}

const id = comboColas.map(comboCola => comboCola.nombre);
const eliminarArticulos = prompt(`Seleccione el articulo para eliminar:\n${id.join('\n')}`);

const articulo = comboColas.findIndex(comboCola => comboCola.nombre === eliminarArticulos);
if(articulo === -1){
    alert("no tienes ningun combo")
    return;
}
comboColas.splice(articulo,1);
alert(`El combo: "${eliminarArticulos}" fue eliminado exitosamente.`);

}