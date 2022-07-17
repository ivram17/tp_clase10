// parte 1 //
function parte1(){
    let nombre = "Programación"+" "+"Fácil.";
    let saludo = "Les doy la bienvenida";
    let extra = "--->"
    let year = "¡¡2022!!";
    let fraseCompleta = saludo +" "+ extra +" "+ nombre + " " + year;
    console.log(fraseCompleta); 
    alert(fraseCompleta);
    } 
// parte 2 //
function parte2(){
    let frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";   
    alert(frase);
}
// parte 3 //
function parte3(){
    let numeroString1 = " 10 ";
    let numeroString2 = " 20 ";
    let numeroString3 = " 30 ";
    let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
    console.log(concatenaNumeros);
    alert(concatenaNumeros);
}
// parte 4 //
function parte4(){
    var nom = prompt ("¿CUAL ES TU NOMBRE?");
    var age = prompt ("¿CUAL ES TU EDAD?");
    console.warn("Soy "+ nom + "tengo "+ age + " años");  
    console.log("Soy "+ nom + " tengo "+ age + " años");
    alert("Soy "+ nom + " tengo "+ age + " años");
}
// parte 5 //
function parte5(){
    let edad;
    var sexo;
    edad= prompt (" Introduce tu edad: ");
    sexo = prompt ("Dinos si eres hombre o mujer - h para hombre / m para mujer" );
    if (sexo == 'm' && edad >= 20){
    alert("Puedes pasar, eres mayor de edad.");}
    else if (sexo == 'h' && edad >= 18){
        alert("Puedes pasar, eres mayor de edad.");}
    else {
        alert("Eres menor de edad. No puedas pasar.");
    }
}



