const { createApp } = Vue

createApp({
    data() {
        return {
            logo: './img/logo.jpg',
            // aggiungiamo un collegamento tra data ed il campo di imput, il collegamento dovra essere un obbieto che uguale agli altri ha la proprieta text e la proprieta done.
            input: '',
            tasks: [
                {
                    text: 'Allenarmi',
                    done: true,
                },
                {
                    text: 'Studiare',
                    done: true,
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Prendere la Lettiera del Gatto',
                    done: true,
                },
            ],
            newTask: {
                text: '',
                done: '',
            },

        }
    },
    methods: {

        // aggiungiamo il evento del click al bottone Aggiungi
        addTask() {

            //creiamo una ugualianza tra  il v-model del input e la proprieta text del oggeto newTask, e facciamo new.task.text perche sto richiamando a la proprieta di un oggeto.
            this.newTask.text = this.input;
            //facciamo un clone del oggeto newTask, cosi che possiamo aggiungere diverse task
            let cloneNewTask = { ...this.newTask };
            // sempre utilizziamo 'this' per richiamare una proprieta. Unshift e simile a  push, cioe pusha, ma il elemento si posizziona nel indice 0.
            this.tasks.unshift(cloneNewTask);
            console.log('hey', this.newTask);
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