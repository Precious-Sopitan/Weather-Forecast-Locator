const input = document.getElementById("search");
const display = document.getElementById("display");
const temp = document.getElementById("temperature");
const wind = document.getElementById("wind");

const apiKey = "f288184883643784124ec9ad9b07351b"

input.addEventListener("change", (e) => {
    e.preventDefault();
    let value = e.target.value;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`
    )
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if (data.cod !== "404"){
            display.textContent = `The current temperature in ${value} is ${data.main.temp}°`;
            temp.textContent = `The current humidity is: ${data.main.humidity}%`;
        }
    }).catch((err)=>{
        console.log(err);
    })
    }
)

   
















    
     
    