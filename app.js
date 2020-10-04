let time = [];

function addTime() {
   
    time.push(document.getElementById('input').value);
    document.getElementById('total').innerHTML = time;
    console.log(time);
    return time;

}


function sumoftime() {
    let hours = [];
    let minutes = [];
    let secs = [];

    time.forEach(element => {
        let spl = element.split(':');

        let h = parseFloat(spl[0]);
        hours.push(h);

        let m = parseFloat(spl[1]);
        minutes.push(m);

        let s = parseFloat(spl[2]);
        secs.push(s);

    });

    console.log(hours);
    console.log(minutes);
    console.log(secs);


    function sums(secs) {
        let totals = 0;
        for (let s in secs) {
            totals += secs[s];
        }
        return totals;
    }
    console.log(sums(secs));
    let ress = (sums(secs) % 60);
    let ints = Math.floor(sums(secs) / 60);
    console.log(ress);
    console.log(ints);



    function summ(minutes) {
        let totalm = 0 + ints;
        for (let m in minutes) {
            totalm += minutes[m];
        }
        return totalm;
    }
    console.log(summ(minutes));
    let resm = (summ(minutes) % 60);
    let intm = Math.floor(summ(minutes) / 60);
    console.log(resm);
    console.log(intm);

    function sumh(hours) {
        let totalh = 0 + intm;
        for (let h in hours) {
            totalh += hours[h];
        }
        return totalh;
    }
    console.log(sumh(hours));


    document.getElementById('total').innerHTML = sumh(hours) + ' hours ' + resm + ' minutes ' + ress + ' seconds ';

    
}


