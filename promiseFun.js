const mainFun = async () => {
    const fun1 = new Promise((resolve,reject) => {

        const randomValue = Math.random();
        if(randomValue > 0.5){
            setTimeout(() => {
                resolve(`this is resolved msg ${randomValue}`)
            }, 1500);
        }else{
            setTimeout(() => {
                reject(`this is reject msg ${randomValue}`)
            }, 1500)
           
        }
    });
    console.log('before ')
    
    const op = await fun1.then((res) => {
    
    console.log('res is',res)
        console.log('after this is res ')
    
        return res
    
    }).catch((err) => {
    
        console.log('err is',err)
        console.log('after this is err')
        return err
    
    });
    
    console.log('op',op)
    
};

mainFun()