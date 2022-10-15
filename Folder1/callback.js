//Well if you want to know more about call back you are well come 
//if you want vedio link where i have refer this===https://www.youtube.com/watch?v=GWq0XETTOTk

function makaUpperCase(value){
    console.log(value.toUpperCase())
    }
function handleName(name,cb){
    const fullName = `${name} Jaleta`
    cb(fullName)
}
handleName('miretu',makaUpperCase)
handleName('Takkalegn',(value)=>{
    console.log(value.toUpperCase())
});