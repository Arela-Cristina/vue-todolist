const { createApp } = Vue

createApp({
    data() {
        return {
            logo: './img/logo.jpg',
            // aggiungiamo un collegamento tra data ed il campo di imput 
            newTask: '',
            tasks: [
                'Allenarmi',
                'Studiare',
                'Fare il bucato',
                'Fare la Spessa',
                'Prendere la lettiera del gato',
            ],
        }
    },
    methods: {

        // aggiungiamo il evento del click al bottone Aggiungi
        addTask() {
            // sempre utilizziamo 'this' per richiamare una proprieta. unshift e simile  push, cioe pusha, ma il elemento si posizziona nel indice 0.
            this.tasks.unshift(this.newTask);
        },

        // aggiungiamo il evento del click a le 'X' per cancellare task
        removeTask(eachIndex) {
            console.log(eachIndex);
            //perrimuovere un elemento especifico del array utilizziamo splice, e li passiamo il argomento eachIndex, e anche il uno,perche vogliamo che al click della X ci cancella soltanto un singolo elemento.
            this.tasks.splice(eachIndex, 1);
        }
    }
}
).mount('#app') 