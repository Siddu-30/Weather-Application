
const btn=document.querySelector('#btn');
const report=document.querySelector('.report');

btn.addEventListener('click',(e)=>{
    e.preventDefault();

    let input=document.getElementById('search');

    let city=input.value;
    if(city) getWeather(city);
    input.value="";

})

async function getWeather(city) {
    
    const apikey="3c17ac1315fbe89828f426c9c6e62c12";
    const cityName=document.getElementById('cityName');
    const temp=document.getElementById('temp');
    const feels=document.getElementById('feels');
    const humid=document.getElementById('humid');
    const desc=document.getElementById('desc');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    

    try{
        const res=await fetch(url);
        const data=await res.json();

        if(data.cod!=200){
            report.innerHTML="City not found";
            return;
        }

        report.classList.remove("hidden");

        cityName.innerText=`City - ${data.name}`;
        temp.innerText=`Temp : ${data.main.temp} °C`;
        feels.innerText=`Feels like : ${data.main.feels_like} °C`;
        humid.innerText=`Humidty : ${data.main.humidity} %`;
        desc.innerText=`Weather :${data.weather[0].description}`;

    }
    catch(err){
        console.error("Error",err);
    }

}