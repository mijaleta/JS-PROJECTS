function makaUpperCase(value){
    console.log(value.toUpperCase())
    }
   // makaUpperCase('my name is miretu jaleta chala futasa kasa miju ode shumakar')
function handleName(name,cb){
    const fullName = `${name} Jaleta`
    cb(fullName)
}
handleName('mire',makaUpperCase)