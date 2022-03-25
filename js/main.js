function countTime() {
    const lastDate = document.querySelector('.last-date').dateTime;

    countUpFromTime(lastDate);

    function countUpFromTime(countFrom) {
        countFrom = new Date(countFrom).getTime();
        let now = new Date(),
            timeDifference = (now - countFrom);
        countFrom = new Date(countFrom)

        let secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

        let days = Math.floor(timeDifference / (secondsInADay) * 1);
        let years = Math.floor(days / 365);
        days = years > 1 ? days - (years * 365) : days;
        let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
        let mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
        let secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

        let str = '';
        str += years > 0 ? `<span>років: <b class="count">${years} </b></span>` : ``;
        str += days > 0 ? `<span>днів:  <b class="count">${days} </b></span>` : ``;
        str += hours > 0 ? `<span>годин: <b class="count">${hours} </b></span>` : ``;
        str += `<span>хвилин: <b class="count">${mins}</b></span> <span>секунд:  <b class="count">${secs}</b></span>`;

        document.querySelector('.last-date').innerHTML = str;
        clearTimeout(countUpFromTime.interval);
        countUpFromTime.interval = setTimeout(function() {
            countUpFromTime(lastDate);
        }, 1000);
    }
}

countTime();