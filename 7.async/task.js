class AlarmClock {
    constructor(alarmCollection = [], timerId = null) {
    Object.assign(this, {alarmCollection, timerId})
    }

    addClock(time, func, id) {
        if (id == undefined) {
            throw new Error('error text')
        }
        if(time, func, id) {
            if (this.timerId == undefined) {
                this.alarmCollection.push({time: time, id: id, callback: func});
                this.timerId = [id]}
            if (this.timerId.find(item => item == id) == id) {
                console.error()
            }
            else {
                this.alarmCollection.push({time: time, id: id, callback: func});
                this.timerId.push(id);
            }
            console.log(this)
        }
    }

    removeClock(id) {

        for (let i = 0; i < this.timerId.length; i++) {
            if (this.timerId[i] == id) {
                this.timerId.splice([i],1);
                this.alarmCollection.splice([i],1);
                console.log(this)
                }
            }        
    }

    getCurrentFormattedTime() {       
        let time = new Date();
        let hh = time.getHours();
        let mm = time.getMinutes();
        this.date =('0' + hh).slice(-2) + ':' + ('0' + mm).slice(-2);
        return this.date;
    }

    start() {
        setInterval(() => {
            if (this.alarmCollection) {

                for (let i = 0; i < this.alarmCollection.length; i++)
                checkClock(this.alarmCollection[i].time)
            }
            }, 1000)
        
    }

    stop() {
        if(this.alarmCollection.length > 0) {
            clearInterval(this.start)
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(function(element){
           console.log(element.time, element.id)
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0,this.alarmCollection.length);
        delete this.timerId;
    }
}

function checkClock (bell) {
    let time = clock.date;
    if (time == bell) {
       // this.alarmCollection.callback;
    }
    if (time == undefined) {
        this.alarmCollection.forEach(function(element){
           console.log(element)
        });
    }
}

let clock1 = new AlarmClock();
clock1.addClock("21:25", () => console.log('Пора вставать'), 1);
clock1.addClock("21:26", () => {console.log('Давай, вставать уже!'); clock1.removeClock(2)}, 2);
clock1.addClock("21:27", () => console.log('Иди умываться!'), 3);
clock1.addClock("21:26", () => {
    console.log('Давай, вставать уже!');
    clock1.clearAlarms();
    clock1.printAlarms();
    }, 4);

clock1.printAlarms();