(() => {
    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante{

        salvarMundo() {
            return 'El mundo esta salvado'
        }

    }

    class Villian extends Mutante{
        conquistarMundo() {
            return 'Mundo conquistado'
        }

    }

    const magneto = new Villian('Magneto', 'Magnus')
    const wolvering = new Xmen('Wolvering', 'Logan')
    //console.log(wolvering.salvarMundo())
    //console.log(magneto.conquistarMundo())

    const printName = (character:Mutante) => {
        console.log(character.realName)
    }

    //printName(wolvering)
    

})()