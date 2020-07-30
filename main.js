$(function() {
    console.log("query en marcha")

    $.ajax({
        url:'https://api.openweathermap.org/data/2.5/onecall?lat=-34.5708&lon=-58.6243&exclude=current,hourly&appid=b11a2cba6daf36f38a00247eaef3851b',
        type: 'GET',
        success: function(response){
            let weather = response;
            console.log(weather)
            $('#climaActual').html(`
            <p class="temperatura">${weather.daily[0].temp.day - 273,15}</p>
            <p class="c">°C</p>
            `);
            $('#tempVariacion').html(`
            <p class="tempMax">${parseInt(weather.daily[0].temp.max - 273.15)}°C↑</p>
            <p class="tempMin">${parseInt(weather.daily[0].temp.min - 273.15)}°C↓</p>
            `);
            $('#icono').html(`<img src="http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png">`);

            $('#humedad').html(`
            <img src="img/humidity.png" class="icon">
            <p class="letraFuente1">${weather.daily[0].humidity}%</p>
            <p class="letraFuente2">Humidity</p>
            `);
            $('#presion').html(`
            <img src="img/barometer.png" class="icon">
            <p class="letraFuente1">${weather.daily[0].pressure}mBar</p>
            <p class="letraFuente2">Pressure</p>
            `);
            $('#viento').html(`
            <img src="img/wind.png" class="icon">
            <p class="letraFuente1">${weather.daily[0].wind_speed}Km/H</p>
            <p class="letraFuente2">Wind</p>
            `);
            $('#saleSol').html(`
            <img src="img/sunrise.png" class="icon">
            <p class="letraFuente1">${weather.daily[0].sunrise}</p>
            <p class="letraFuente2">Sunrise</p>
            `);
            $('#ocultaSol').html(`
            <img src="img/sunset.png" class="icon">
            <p class="letraFuente1">${weather.daily[0].sunset}</p>
            <p class="letraFuente2">Sunset</p>
            `);

            $('#dia0').html(`
            <img src="http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@2x.png" >
            <p class="letraFuente2">${parseInt(weather.daily[1].temp.max - 273.15)}°C↑     ${parseInt(weather.daily[1].temp.min - 273.15)}°C↓</p>
            `);
            $('#dia1').html(`
            <img src="http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}@2x.png" >
            <p class="letraFuente2">${parseInt(weather.daily[2].temp.max - 273.15)}°C↑     ${parseInt(weather.daily[2].temp.min - 273.15)}°C↓</p>
            `);
            $('#dia2').html(`
            <img src="http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}@2x.png" >
            <p class="letraFuente2">${parseInt(weather.daily[3].temp.max - 273.15)}°C↑     ${parseInt(weather.daily[3].temp.min - 273.15)}°C↓</p>
            `);

        }
    })

});

function fechaActual(){
    var dias=[ "Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    var meses=["jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    var f=new Date();
    
    document.getElementById("fecha").innerHTML= dias[f.getDay()] +","+ f.getDate() +" "+ meses[f.getMonth()] +" "+ f.getFullYear();
    document.getElementById("dayNext1").innerHTML= dias[f.getUTCDay() + 1] +" "+ (f.getDate() + 1);
    document.getElementById("dayNext2").innerHTML= dias[f.getUTCDay() ] +" "+ (f.getDate() );
    document.getElementById("dayNext3").innerHTML= dias[f.getUTCDay() ] +" "+ (f.getDate() );
}
