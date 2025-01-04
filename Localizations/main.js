
let h2 = document.querySelector('h2')

function localizationSucess(orig) {
    console.log(orig.coords.latitude, orig.coords.longitude)
    h2.textContent = `Latitude: ${orig.coords.latitude}, Longitude: ${orig.coords.longitude}`
}

function locNegada(orig) {
    h2.textContent = `Não liberada a localização!!`
}

// Obtendo localizacao atual.
navigator.geolocation.getCurrentPosition(localizationSucess, locNegada, {
    enableHighAccuracy: true, // buscando com a maior precissao possivel.
    timeout: 1500 // desativa apos os milesegundos.
})

var map = L.map('mapId').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map)
