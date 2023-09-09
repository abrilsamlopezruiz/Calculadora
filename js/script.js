let seccionHtml =
 document.getElementById('conHtml');
let seccionCreate =
document.getElementById('conCreate');
let seccionCreate2=
document.getElementById('Create2')

seccionHtml.innerHTML=`<h1 id="titulo">Creando nodos con InnerHTMl</h1> 
<p class="parrafo contenido">
    <span class="capital">Lorem ipsum</span>
     dolor sit amet, consectetur adipiscing elit. Nullam nec risus nibh. Phasellus ac dignissim dui. Aenean molestie, lacus ac aliquet ultricies, turpis
</p>`;

//--Creacion de nodos con create

//h1
let elemento =document.createElement('h1');
let contenido =
        document.createTextNode('Creando nodos con Create');
elemento.appendChild(contenido);
elemento.setAttribute('id','titulo')
seccionCreate.appendChild(elemento);


//span
let elemento3 =document.createElement('span');
let contenido3= document.createTextNode('Lorem Ipsum ');
elemento3.setAttribute('class',"capital");
elemento3.appendChild(contenido3);
//p
let elemento2 =document.createElement('p');
let contenido2 =
        document.createTextNode('dolor sit amet, consectetur adipiscing elit. Nullam nec risus nibh. Phasellus ac dignissim dui. Aenean molestie, lacus ac aliquet ultricies, turpis');
elemento2.appendChild(elemento3);
elemento2.appendChild(contenido3);
elemento2.appendChild(contenido2);
elemento2.setAttribute('class','parrafo contenido')

seccionCreate.appendChild(elemento2);

//section
    //titulo
let Seleme =document.createElement('h1');
let Sconte =
        document.createTextNode('Conoceme');
Seleme.appendChild(Sconte);
Seleme.setAttribute('id','titulo')
seccionCreate.appendChild(Seleme);
    //article1
let articulo1 = document.createElement("article");
articulo1.classList.add("articulo1");
let contenidoArticulo1 = document.createTextNode("");
articulo1.appendChild(contenidoArticulo1);
//fieldset
let fieldset = document.createElement("fieldset");
// span
let span = document.createElement("span");
let contenidoSpan = document.createTextNode("Alejandro");
span.appendChild(contenidoSpan);
// span al fieldset
fieldset.appendChild(span);
// fieldset al article
articulo1.appendChild(fieldset);
// article a la section
seccionCreate.appendChild(articulo1);



// article2
let articulo2 = document.createElement("article");
articulo2.classList.add("articulo2");
let contenidoArticulo2 = document.createTextNode("");
articulo2.appendChild(contenidoArticulo2);
//imagen
var imagen = document.createElement("img");

// Establecer la ruta de la imagen en la carpeta "img"
imagen.src = "img/user.png";

// imagen a article
articulo2.appendChild(imagen);

// poner  articulos en Create2
seccionCreate2.appendChild(articulo1);
seccionCreate2.appendChild(articulo2);

    



