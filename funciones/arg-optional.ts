(() => {
   
    const fulName = (firstName:string, lastName?:string): string => {
        return `${firstName} ${lastName || '---'}`;
        
    }

    const name = fulName('Tony')
    console.log(name)

})()