const obj2 ={
    height: 200,
    width: 300,
    title: "My block"
}

function kvadrad2(obj){
    for(var key in obj){
        if(isNaN(obj[key])){
        }else{
         console.log(obj[key]**2)
        }
     }
}
kvadrad2(obj2)