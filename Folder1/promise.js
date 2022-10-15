const value = 2
const random =  Math.floor(Math.random * 3)
const promise = new Promise((resolve, reject) =>{

    if(value===random){
resolve('you guessed correctly')
    }

    else{
        console.log(random)
        reject('wrong number')
            }
})
promise.then((data)=>{
console.log(data)
}).catch((error)=>{
console.log(error)
})