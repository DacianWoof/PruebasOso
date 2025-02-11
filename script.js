document.addEventListener("DOMContentLoaded", function () {
    cargarNoticias();
});

function cargarNoticias() {
    fetch("noticias.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON");
            }
            return response.json();
        })
        .then((data) => {
            const contenedor = document.getElementById("contenedor-noticias");
            contenedor.innerHTML = ""; // Limpiar antes de cargar nuevas noticias
            data.noticias.forEach((noticia) => {
                const div = document.createElement("div");
                div.classList.add("noticia");
                div.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.contenido}</p>
                `;
                contenedor.appendChild(div);
            });
        })
        .catch((error) => {
            console.error("Error al cargar las noticias:", error);
            document.getElementById("contenedor-noticias").innerHTML =
                "<p>Error al cargar las noticias.</p>";
        });
}

    // Inicializar Google Maps
    window.initMap = function() {
        var location = { lat: -34.6037, lng: -58.3816 };
        var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 15,
            center: location
        });
        var marker = new google.maps.Marker({ position: location, map: map });
    };