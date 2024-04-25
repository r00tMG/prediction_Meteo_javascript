if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        async function(position){
            const lat = position.coords.latitude
            const long= position.coords.longitude
            console.log(`Latitude: ${lat}, Longitude: ${long}`)
            const apiKey ='9b91a33abb49ac9610863931dcb895f3'
            let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=${apiKey}&units=metric&lang=fr`
            // let  wrapper_
            // let loader_chart = document.createElement('p')
            // loader_chart.innerText = 'Loading chart...'
            // ctx.append(loader_chart)
            try{
                const r = await fetch(`${url}`,{
                    headers: {
                        Accept:'application/json'
                    }
                })
                if(!r.ok){
                    throw new Error(`Erreur au niveau du server`)
                }
                const data = await r.json()
                console.log(data)
                //filtrer l'objet list par date unique
                const forecastByDate=[]
                const fiveForecastDay=data.list.filter(l=>{
                    const date = new Date(l.dt_txt).getDate()
                    if(!forecastByDate.includes(date)){
                      return  forecastByDate.push(date)
                    }
                })
                console.log(fiveForecastDay)
                // filtrer les dates 
                const forecastsDays = fiveForecastDay.map(el => {
                    const date = new Date(el.dt_txt).toLocaleString('fr-FR',{weekday:'long'});
                    return date;
                });
                // console.log(forecastsDays)
                forecastsDays.forEach(el => {
                    console.log("Date:", el.date);
                })
                //filtrer par température
                const forecastsTemp = fiveForecastDay.map(el => {
                    const temperature = el.main.temp;
                    return temperature
                })
                // console.log(forecastsTemp)
                forecastsTemp.forEach(el => {
                    console.log("Température:", el.temperature);
                })

                // ChartJs
                const ctx = document.getElementById('myChart')
                console.log(ctx)
                new Chart(ctx, {
                    type: 'line',
                    data: {
                      labels: forecastsDays,
                      datasets: [{
                        label: 'Température',
                        data: forecastsTemp,
                        borderWidth: 1,
                        borderColor:'white',
                        backgroundColor:'blue dark'
                      }]
                    },
                    options: {
                      scales: {
                        y: {
                          beginAtZero: true
                        }
                      }
                    }
                  });
            }catch(e){
                // loader_chart.innerText = "Erreur de récupération de donnée au niveau des charts"
                // loader_chart.style.color='red'
                return e.message
            }
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
}


  