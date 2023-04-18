(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,

        ) {
            console.log('Constructor Avenger Llamado')
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean = true
        ) {
            super(name, realName)
            console.log('Constructor Xmen Llamado')
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName())
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre de ser de mas de 3 letras')
            }
            
            this.name = name;
        }

    }

    
    //const wolvering = new Xmen('Wolvering', 'Logan')
    //wolvering.fullName ='fe'
    //console.log(wolvering.fullName)
    //wolvering.getFullNameDesdeXmen()

})()