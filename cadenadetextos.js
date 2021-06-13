let texto = prompt("Ingrese un texto");
console.log(texto.includes("a"));
alert(texto.includes("a"));

let texto1 = prompt("Ingrese un texto");
console.log(texto1.toLocaleLowerCase());
console.log(texto1.toUpperCase());
alert((texto1.toLocaleLowerCase()) + (texto1.toUpperCase()) );

let texto2 = prompt("Ingrese una palabra");
console.log(texto2.charAt(0));
alert(texto2.charAt(0));

let texto3 = prompt("Ingrese una frase");
console.log(texto3.length);
alert(texto3.length);

let numero = prompt("Ingrese un número");
console.log(numero.length);
alert(numero.length);

let texto4 = prompt("Ingrese una palabra");
console.log(texto4.charAt ( texto4.length -1 ));
alert (texto4.charAt ( texto4.length -1 )) ;

let texto5 = "hola usuario, ¿como estas?";
console.log(texto5.replaceAll(" ","*"));
alert(texto5.replaceAll(" ","*"));

let texto6 = prompt("Escriba una letra");
console.log(texto6.includes("e"));
alert(texto6.includes("e"));

let texto7 = prompt("Escriba una cadena de texto");
console.log(texto7.includes("e"));
alert(texto7.includes("e"));

let texto8 = prompt("Escriba un texto");
console.log((texto8.slice ( 1 )));
alert(texto8.slice ( 1 ));

let  texto9 =  prompt ( "Ingrese su nombre en minúscula" ) ;
console.log((texto9.slice( 0 ,  1 ) . toUpperCase ( ))  +  (texto9.slice ( 1 )));
alert (texto9.slice ( 0 ,  1 ) . toUpperCase ( )  +  texto9.slice ( 1 ) ) ;






