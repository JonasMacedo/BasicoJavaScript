
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

