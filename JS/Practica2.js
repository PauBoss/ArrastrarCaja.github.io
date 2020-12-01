/**
 * Defino la función arrastrarCaja que definira la opacidad al ser arrastrada.
 **/
function arrastrarCaja( ) {
	document.getElementById( "capa1" )
	.style.opacity = "50%";
}

/**
 * Defino la función dejarCaja que definira la opacidad al ser dejada en su origen.
 **/
function dejarCaja( ) {
	var hola = document.getElementById( "capa1" )
	.style.opacity = "100%";
}

/**
 * Defino la función cambiarColor que definira el color al estar la capa1 encima de la capa2.
 **/
function cambiarColor( ) {
	document.getElementById( "capa2" )
	.style.background = "red";
}

/**
 * Defino la función soltarColor que definira el color al estar la capa1 encima de la capa2.
 **/
function soltarCaja( ) {
	document.getElementById( "capa2" )
	.style.background = "white";
}

/**
 * Defino la función sobreCaja que permitirá poder dejar la capa1 encima de la capa2.
 **/
function sobreCaja( evento ) {
	evento.preventDefault( );
}

/**
 * Defino la función resultadoCaja que definira el color final, eliminará la capa1 y
 * cambiará el texto final.
 **/
function resultadoCaja( ) {
	document.getElementById( "capa1" )
	.remove( );
	document.getElementById( "capa2" )
	.style.background = "yellow";
	document.getElementById( "capa2" )
	.innerHTML = "Lo has logrado !!!";
}

//Eventos definiendo la acción y la función de la capa1.
document.getElementById( "capa1" )
.addEventListener( "drag", arrastrarCaja, false );
document.getElementById( "capa1" )
.addEventListener( "dragend", dejarCaja, false );

//Eventos definiendo la acción y la función de la capa2.
document.getElementById( "capa2" )
.addEventListener( "dragenter", cambiarColor, false );
document.getElementById( "capa2" )
.addEventListener( "dragleave", soltarCaja, false );
document.getElementById( "capa2" )
.addEventListener( "dragover", sobreCaja, false );
document.getElementById( "capa2" )
.addEventListener( "drop", resultadoCaja, false );
