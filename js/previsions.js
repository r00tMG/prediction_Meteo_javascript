
const name_c = document.getElementById('search-input')
console.log("dvc",name_c)
name_c.addEventListener('change', async ()=>{
        const city = name_c.value
        const apiKey ='9b91a33abb49ac9610863931dcb895f3'
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=fr`
        const r = await fetch(`${url}`,{
        headers: {
            Accept:'application/json'
        }
        })
        if(!r.ok){
            throw new Error(`Erreur au niveau du server`)
        }
        const data = await r.json()
       
        // const article = document.querySelector('#article')
        const article1 = document.querySelector('#article1')
        console.log(article1)
            const forecastByDay = []
            console.log( forecastByDay)
        const fiveForecastDay = data.list.filter(l =>{
             const date = new Date(l.dt_txt).getDate()
             if(!forecastByDay.includes(date)){
                return forecastByDay.push(date)
             }
         })
         
         console.log(forecastByDay[0])
        article1.innerHTML = `
            <p>${new Date(fiveForecastDay[0].dt_txt).toLocaleDateString()}</p>
            <p><img src="https://openweathermap.org/img/wn/${fiveForecastDay[0].weather[0].icon}@2x.png" id="image-icone" class="img-fluid" width="100%" heigth="100%" alt="icone weather">
            </p>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer"
            viewBox="0 0 16 16">
            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
                d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
            </svg>
            ${Math.round(fiveForecastDay[0].main.temp)} °C</p>

        `
        const article2 = document.querySelector('#article2')
        article2.innerHTML = `
            <p>${new Date(fiveForecastDay[1].dt_txt).toLocaleDateString()}</p>
            <p><img src="https://openweathermap.org/img/wn/${fiveForecastDay[1].weather[0].icon}@2x.png" id="image-icone" class="img-fluid" width="100%" heigth="100%" alt="icone weather">
            </p>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer"
            viewBox="0 0 16 16">
            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
            d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
            </svg>
            ${Math.round(fiveForecastDay[1].main.temp)} °C</p>
            
            `
            const article3 = document.querySelector('#article3')
            article3.innerHTML = `
            <p>${new Date(fiveForecastDay[2].dt_txt).toLocaleDateString()}</p>
            <p><img src="https://openweathermap.org/img/wn/${fiveForecastDay[2].weather[0].icon}@2x.png" id="image-icone" class="img-fluid" width="100%" heigth="100%" alt="icone weather">
            </p>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer"
            viewBox="0 0 16 16">
            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
            d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
            </svg>
            ${Math.round(fiveForecastDay[2].main.temp)} °C</p>
            
            `
            const article4 = document.querySelector('#article4')
            article4.innerHTML = `
            <p>${new Date(fiveForecastDay[3].dt_txt).toLocaleDateString()}</p>
            <p><img src="https://openweathermap.org/img/wn/${fiveForecastDay[3].weather[0].icon}@2x.png" id="image-icone" class="img-fluid" width="100%" heigth="100%" alt="icone weather">
            </p>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer"
            viewBox="0 0 16 16">
            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
            d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
            </svg>
            ${Math.round(fiveForecastDay[3].main.temp)} °C</p>

            `
            const article5 = document.querySelector('#article5')
            article5.innerHTML = `
            <p>${new Date(fiveForecastDay[4].dt_txt).toLocaleDateString()}</p>
            <p><img src="https://openweathermap.org/img/wn/${fiveForecastDay[4].weather[0].icon}@2x.png" id="image-icone" class="img-fluid" width="100%" heigth="100%" alt="icone weather">
            </p>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer"
            viewBox="0 0 16 16">
            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
                d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
            </svg>
            ${Math.round(fiveForecastDay[4].main.temp)} °C</p>
            `
})