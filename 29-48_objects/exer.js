

{
    //пример чейнинга
    console.log("EXER 1")
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { // показывает текущую ступеньку
            console.log( this.step );
        }
    };

    ladder.down().down().up().up().up().up().up().up().showStep()

}