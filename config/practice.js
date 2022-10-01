var promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("finished")
    },1000)
})

async function fun(){
    var data=await promise;
    console.log("Hello")
}

fun().then(console.log).catch(console.log);