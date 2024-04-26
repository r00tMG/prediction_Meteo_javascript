const apiKey ='9b91a33abb49ac9610863931dcb895f3'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
/**
 * 
 * @param {Object} res 
 */
function affichageData(res){

    const options = { 
        weekday: 'long', 
        // year: 'numeric', 
        // month: 'long', 
        // day: 'numeric' 
    }
const time= new Date().toLocaleTimeString()
const date = new Date().toLocaleString('fr-FR',options)
document.querySelector('#city').style.width="auto"
document.querySelector('#city').innerHTML = `

   
    <h1 class="fs-4"  ><small class="text-muted">${date}</small></h1>
    <p class="fs-4 py-3"><small class="text-muted"> ${time}</small></p>
    <div class="row m-0 d-flex flex-wrap justify-content-center align-items-center">
        <div class="col-4 flex-wrap">
            <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" id="image-icone" class="img-fluid" width="100%" heigth="100%" alt="icone weather">
        </div>
        <div class="col-4 flex-wrap">
            <h5 class="fs-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="text-danger bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                ${res.name}
            </h5>
        </div>
        <p class="fs-2 py-3">${res.weather[0].description}<p>
        <div class="row mb-3 bg-light d-flex flex-wrap rounded shadow justify-content-center">
        <div class="col-4 m-0 flex-wrap">
        <p class="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-primary bi bi-thermometer"
            viewBox="0 0 16 16">
            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
                d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
        </svg>
        Temp</p>
        <p class="text-dark">${Math.round(res.main.temp)} °C</p>
        </div>
      
        <div class="col-4 m-0 flex-wrap">
            <p class="text-center text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-primary bi bi-droplet-half"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
            <path fill-rule="evenodd"
                d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z" />
            </svg>
            Humidité</p>
            <p class="text-center text-dark">${res.main.humidity}%</p>
        </div>
        <div class="col-4 m-0 flex-wrap">
            <p class="text-center text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-primary bi bi-speedometer"
            viewBox="0 0 16 16">
            <path
                d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
            <path fill-rule="evenodd"
                d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0" />
            </svg>
            Vent</p>
            <p class="text-center text-dark">${Math.round(res.wind.speed)}km/h</p>
        </div>
        </div>

    </div>

`

}

// Appel de l'api et la récupération des données
async function main(city){
const wrapper = document.querySelector("#data-wrapper")
const loader = document.createElement("p")
loader.innerText = 'Loading...'
wrapper.appendChild(loader)

// Appel de l'api openWeather API forecast
const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=fr`,{
headers : {
Accept : 'application/json'
}
})
try {
if(!r.ok){
throw new Error(`Erreur au niveau du server`)
}
const data = await r.json()
// console.log(data)

// Affichage des reponses
affichageData(data)
loader.remove()
} catch (e) {
loader.style.color = 'red'
loader.innerText = 'Error de recupération'
return
}
}

// Appel de l'api openWeather aprés chaque evenement change
document.querySelector('#search-input').addEventListener(
'change',
function(e){
// console.log(e.currentTarget)
e.preventDefault();
// const city = new FormData(e.currentTarget)
// const ville = city.get('city')
const ville = document.querySelector('#search-input').value
// console.log(ville)
main(ville)

}
)



/**
 * 
 * @param {string} ville 
 * @param {string} latitude 
 * @param {string} longitude 
 * 
 * @returns {Object}
 */
//Affichage par défaut de la position correspondante à l'utilisateur
async function recupération(latitude,longitude) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${apiKey}&units=metric&lang=fr`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Erreur au niveau du server`)
        }
        const data = await response.json()
        // console.log(data)
        const ville = data.city.name
        // console.log(ville)
        main(ville) // Affichage par défaut la ville correspondante à ma position de l'utilisateur
 
        // const lis = data.list 
        // console.log(lis)
        
        // affichagePrevision(lis)

    } catch (error) {
        console.error("Error fetching data:", error)
        return
    }
}




if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        async function(position){
            const lat = position.coords.latitude
            const long= position.coords.longitude
            // console.log(`Latitude: ${lat}, Longitude: ${long}`)
            recupération(lat,long)
        },
        function(PositionError){
            switch (PositionError.code) {
                case PositionError.PERMISSION_DENIED:
                    alert('Permission denied')
                    break;
                case PositionError.POSITION_UNAVAILABLE:
                    alert('Position unavailable')
                    break;
                case PositionError.TIMEOUT:
                    alert('Timeout')
                    break;
                default:
                    break;
            }
        }
        
    )
}else{
    alert('Geolocation is not supported by this browser.')
}


