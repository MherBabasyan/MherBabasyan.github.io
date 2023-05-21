let button=document.querySelector(".button")
let inputValue=document.querySelector(".inputValue")
let name=document.querySelector(".name")
let desc=document.querySelector(".desc")
let temp=document.querySelector(".temp")



button.addEventListener('click',function(){


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response=>response.json())
    .then(data=>{

let nameValue=data["name"];
let tempValue =data['main']['temp'];
let descValue=data['weather'][0]["description"];
name.innerHTML=nameValue
temp.innerHTML=tempValue
desc.innerHTML=descValue

    })
    



    .catch(err=>alert("Wrong city name!"))


})