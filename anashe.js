let espacio= " "
//1er consigna
//alert ("Bienvenido"+ espacio + nombre1);
let nombreusuario = prompt ("Escriba su Nombre")
console.log ("Bienvenido",nombreusuario)


//2da consigna
let aniodenacimiento = parseInt (prompt ("Ingrese su anio de nacimiento"))
let anioactual = parseInt (prompt ("Ingrese el anio actual"))
console.log ("Su edad es:", anioactual - aniodenacimiento)
 


//3era consigna
let localidad =  (prompt ("Ingrese la localidad en donde vive"))
let calle =  (prompt ("Ingrese la calle en donde vive"))
//console.log ("Usted vive en:", localidad + espacio +"Calle", calle)
alert ("Usted vive en"+ espacio+localidad+espacio+calle)
