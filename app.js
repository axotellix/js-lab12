
const app = Vue.createApp({
    data() {
        return {
            // [ form props]
            name: '',
            surname: '',

            // [ signs counter ]
            counter: 0,

            // [ list props ]
            std: [], 
            i: 0
        }
    },

    methods: {
        //@ count > number of signs entered
        setCounter() {
            this.counter = (this.name.trim() + this.surname.trim()).length;
        },

        //@ set > notes` case
        setCase(str) {
            str = str.trim();
            return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        },

        //@ add > new note
        addNote() {
            // add > note
            this.i++;
            this.std.push(`${this.i}. ${this.setCase(this.name)} ${this.setCase(this.surname)}`);

            // clear > field + reset > button
            this.counter = 0;
            this.name = '';
            this.surname = '';
        }
    }
});

app.mount('#app');
