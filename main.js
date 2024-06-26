const { createApp } = Vue

createApp({
    data() {
        return {
            logo: './img/logo.jpg',
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

        // nextImage() {
        //     console.log('hey');

        //     if (this.activeItem >= this.slides.length - 1) {
        //         this.activeItem = 0;
        //     } else {
        //         this.activeItem++;
        //     }
        // },

        // prevImage() {

        //     if (this.activeItem <= 0) {
        //         this.activeItem = this.slides.length - 1;
        //     } else {
        //         this.activeItem--;
        //     }
        // }
    }
}
).mount('#app') 