(() => {
    class Avenger {
        private name: string;
        private team: string;
        public realTeam?: string;
        static avgAge: number = 35;
         
        constructor(name: string, team: string, realTeam?: string) {
            this.name = name;
            this.team = team;
            this.realTeam=realTeam
            
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capi');
    //console.log(antman)



})()

