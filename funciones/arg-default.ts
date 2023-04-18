(() => {
   
    const fulName = (firstName:string, lastName?:string, upper:boolean= false): string => {
        
        if (upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();    
        } else {
            return `${firstName} ${lastName || '---'}`;
        }
        
        
    }

    const name = fulName('Tony', '')
    console.log(name)

})()