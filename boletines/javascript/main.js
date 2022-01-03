//console.log("Hola desde un archivo externo de JS");
//DOM
/*let table = document.querySelectorAll("a");//nos va a regresar el elemento desead
table.forEach(function(tables){
    //el table es el sujeto de la funcion
    console.log(tables);
});*/

/*let celdas=document.querySelectorAll("td");
celdas.forEach(function(td) {
    td.addEventListener('click',function(){
        console.log(this);
    })    
});*/
let links=document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener('click',function(ev){
        ev.preventDefault();
        //quitar clases que ya tiene
        let content= document.querySelector('.content');
        content.classList.remove("animate_fadeIn");
        content.classList.remove("animate_animated");
        //return false; //ya no sirve

        //agregar clases para salida
        content.classList.add("animate_fadeOut");
        content.classList.add("animate_animated");
        setTimeout(function(){
            location.href="../index.html";
        },1000);
        

        
    });
});
//Permite agragar o 
/*let iconos=document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fas fa-play");
})*/
