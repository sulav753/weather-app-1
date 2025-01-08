// let obj={
//     name:"sulav",
//     course:"csit",
//     semester:1,
//     employe:"student",
//     printName:()=>{
//         console.log("fello sulav")
//     }

// }
// console.log(obj.name)
// console.log(obj.course)
// console.log(obj.semester)
// console.log(obj.employe)

// let obj={
//     name:"sulav",
//         course:"csit",
//         semester:1,
//         employe:"student",
//         hello: function(){
//             // console.log("hello sulav")
//         console.log(`my name is${this.name}`)
//         }
// }
// obj.hello()

let btn=document.querySelector(".btn")
const cityInput=document.querySelector("#city")
const temp=document.querySelector("#temp-div")
const apikey="f9fd9b1ff03a119531c6138489cc5a3d"

btn.addEventListener("click",async function(){
    let city=cityInput.value; 
    const weatherinfo=await getweatherInfo(city)
    // console.log(weatherinfo.main.temp)

temp.innerHTML=weatherinfo.main.temp+"C"
    // temp.innerHTML=city
})

async function getweatherInfo(city)
{
const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`


const response= await fetch(apiurl);
const data= await response.json();
return data;
// console.log(data)
// console.log(city)
}
// getweatherInfo("butwal")
