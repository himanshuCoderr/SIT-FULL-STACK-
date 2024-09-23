// const name = "Himanshu"
// // let age

// name = "Kamal"

// console.log(name)

// let num = 12.21

// let amIAdult = true

// let person = {
//     personName : "Himanshu" , 
//     personClass : "Twelve", 
//     personRollNo : 12 , 
//     personAddress :"Haryana", 
//     personWorks : true
// }


// let student  = {
//     studentName : "Manisha",
//     studentRollNo : 55 , 
//     studentAddress : "Jalpaiguri", 

// }

// let ages = [12 , 13, 14 , 15 , 16 , 17 , 18]

// let userDetails = [{name : "X" , age :12} , {name : "Y" ,  age :  13 } , {name : "Z" , age : 145} , {name : "A" , age : 15 } , {name : "Z" , age :18}]
// console.log(userDetails[3])



// let num = 12 
// let num2 = 13

// console.log
// console.log(num + num2)
// console.log(num - num2)
// console.log(num * num2)
// console.log(num / num2)
// console.log(num % num2)

// console.log(num+=3)
// console.log(num*=2)
// console.log(num/=2)
// console.log(num-=2)
// console.log(num%=2)
// console.log(num**=2)

// let arr = []
// let j = 0
// for(let i = 10 ; i < 20 ; i++ ){
//     arr[j] = i
//     j++
   
// }

// console.log(arr)
// let sum = 0 
// for( i = 0 ; i < arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum)   

// const h1Ele = document.querySelector(".h1Ele")

// h1Ele.innerText = "hey p tag"


// const imgEle = document.querySelector("#imgTag")
// console.log(imgEle.getAttribute("width"))
// imgEle.style.border = "10px solid green"
// imgEle.setAttribute("width" , "2000px")
// imgEle.setAttribute("src" , "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVufGVufDB8fDB8fHww")

// console.log(h1Ele)


const btnEle = document.querySelector("button")
const inputEle = document.querySelector("#nameInput")


// function sayHello(){
    // if(inputEle.value.length <= 0){
    //     alert("Add Something")
    // }else{
    //     const statement = "hey User " + inputEle.value
    //     alert(statement)
    // }

//     console.log("hi")
// }
// btnEle.addEventListener("mouseenter" , sayHello)


// let promise1 = 
// function sum1( num1 , num2){
//     return num1 + num2
// }


// let sum = function(num1  , num2){
//     console.log("Sum called")
//     console.log(num1 + num2)
// }

// let sum3 = (num1 , num2)=>{
//     return num1 + num2
// }
// let otherSum = sum

// otherSum(13 , 14)
// let calc = (num1 , num2 , fx) =>{
//     fx(num1 , num2)
// }


// calc(12 , 14 , sum)


//  Timer Functions 
// function run(){
//     console.log("Runnning")
// }
// setTimeout(run , 5000)
// setInterval(run , 5000)
// function forPromise(res , rej){
//     setTimeout(()=>{
//         res(12)
//     } , 5000)
// }

// let promise1 = new Promise(forPromise)

// // console.log(promise1)
// promise1.then((data)=>{
//     console.log("THen is running")
//     console.log(data)
// }).catch((err)=>{
//     console.log("Catch is Running")
//     console.log(err)
// }) 

let postToSend = {
    "userId": 10023093,
    "id": 132132,
    "title": "asdsadasdasHIIDGUAGIUAGSIUGAIUSGIUovident occaecati excepturi optio reprehenderit",
    "body": "asdiuohasiudaiosuiudasiuta et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
let api1 = fetch("https://jsonplaceholder.typicode.com/posts/1" , {
    method : "PUT", {
        
    }
})

// console.log(api1)

api1.then((data)=>{
    return data.json()
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})