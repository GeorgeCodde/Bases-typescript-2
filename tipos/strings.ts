(() => {
    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde";
    const volcanNegro:string = `Héroe Volcan Negro`;

    console.log(`I'm ${linternaVerde}`)

    console.log(batman.toUpperCase());

    console.log( batman[5]?.toUpperCase() || 'No está presente' )

 
})()