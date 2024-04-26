
const name_city = document.getElementById('search-input')
// console.log(name_city)
name_city.addEventListener('change',async () =>{
    const city = name_city.value
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
    // console.log(data)

    //filtrer l'objet list par date unique
                const forecastByDate=[]
                const fiveForecastDay=data.list.filter(l=>{
                    const date = new Date(l.dt_txt).getDate()
                    if(!forecastByDate.includes(date)){
                      return  forecastByDate.push(date)
                    }
                })
                // console.log(fiveForecastDay)
                // filtrer les dates 
                const forecastsDays = fiveForecastDay.map(el => {
                    const date = new Date(el.dt_txt).toLocaleString('fr-FR',{weekday:'long'});
                    return date;
                });
                // console.log(forecastsDays)
                // forecastsDays.forEach(el => {
                //     console.log("Date:", el.date);
                // })
                //filtrer par température
                const forecastsTemp = fiveForecastDay.map(el => {
                    const temperature = el.main.temp;
                    return temperature
                })
                // console.log(forecastsTemp)
                // forecastsTemp.forEach(el => {
                //     console.log("Température:", el.temperature);
                // })

                // ChartJs
                const ctx = document.getElementById('myChart')
                // console.log(ctx)
                // Vérifier si l'élément canvas existe
                if (ctx) {
                    const existingChart = Chart.getChart(ctx);
                    if (existingChart) {
                        existingChart.destroy();
                    }
                }
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
                  })
})

