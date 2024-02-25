/* Escritura automatica*/
const filterContainer = document.querySelector(".container");
const galleryItems = document.querySelectorAll(".typed");

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item")) {
            filterContainer.querySelector(".active").classList.remove("active");
            event.target.classList.add("active")
            const filterValue = event.target.getAttribute("data-filter")
            galleryItems.forEach(item => {
                if (item.classList.contains(filterValue) || filterValue === "all") {
                    item.classList.remove("hide")
                    item.classList.add("show")
                } else {
                    item.classList.remove("show")
                    item.classList.add("hide")
                }
            })
        }
    })

    function scrollToSection(sectionId){
        document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
    }

const typed = new Typed ('.typed', {
    strings: [
        '<i class="especialidad"> AlbertDev </i>',
        '<i class="especialidad"> Designer </i>', 
        '<i class="especialidad"> Fullstack student</i>',
        '<i class="especialidad"> Designer</i>'
    ],

stringsElement: '#cadenas-texto',
typeSpeed: 70, // Velocidad en nlisegundos para poner una Letra,
startDelay: 380, // Tiempo de retroso en iniciar lo onimocion. Aplica tombien cuando termino y vuelve o iniciar,
backSpeed: 75, // Velocidad en milisegundos pora borrar una Letro,
smartBackspace: true, // Eliminor solamente los palabras que sean nuevas en uno cadeno de texto
shuffle: false, // Alteror el orden en el que escribe los palabras.
backDelay: 1500, // Tiempo de espero despues de que termina de escribir una palabra.
loop:true, // Repetir el orroy de strings
loopCount:false, // Cantidad de veces a repetir el arroy. false = nfintte
showCursor:true, // Mostro cursor polpitanto
cursorChar:'|', // Garocter paro el cursor
contentType: 'html',

})

/* fin escritura automatica*/