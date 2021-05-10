const apiKey = '75c974e730d405d66cbc1f41feaf7ba8';
var cityName = 'chandigarh';


var input = document.getElementById("input");
input.addEventListener("keypress",event =>{
    if(event.keyCode === 13)
    {
        event.preventDefault();
        cityName = event.currentTarget.value;
        console.log(cityName);
        fetchCall();
    }
});

function fetchCall(){
fetch(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${apiKey}&units=metric`)

    .then(weather =>{
        return weather.json();
    })
    .then(weather =>{
        console.log(weather);
        var cityN = weather.list[0].name;
        var country = cityN + "," +weather.list[0].sys.country;
        console.log(country);
        document.getElementById("h1").innerText = country;

        var d = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var day = days[d.getDay()];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[d.getMonth()];

        document.getElementById("h5").innerText = day + " "+d.getDate()+" "+month + " "+d.getFullYear() ;

        
        
    })
    .catch(err =>{
        console.log("false");
    });
}
