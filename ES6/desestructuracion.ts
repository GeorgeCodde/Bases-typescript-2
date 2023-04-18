(() => {

    type avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    
    const avengers: avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.125645

    }

    const { poder, vision,  } = avengers
    //console.log(poder.toFixed(2), vision.toUpperCase()) 
    
    const printAvenger = ({vision, ...resto}: avenger) => {
        console.log(vision, resto.ironman);
    }

    //printAvenger(avengers);

    const avengersArr: [string, boolean, number] = ['Cap. America', true, 150.52];
    const [cap, iron, seN] = avengersArr
    //console.log({iron, cap})

})()