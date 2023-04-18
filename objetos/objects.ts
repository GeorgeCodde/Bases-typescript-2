(() => {
    
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name : "Barry Alen",
        age:24,
        powers: ['Super velocidad', 'viajar en el tiempo']

    }

    flash = {
        name: 'Clark ken',
        //age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    }

    //console.log(flash.getName())


})()