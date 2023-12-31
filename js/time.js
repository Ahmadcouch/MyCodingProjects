// get by id and display the time for that field
// hr
// min
// sec

const addZeroToNumberIfLessThan10 = num => {
    if(num < 10){
        return "0" + num;
    }
    return num;
}

const getHr = () => {
    const time = new Date();
    let hr = time.getHours();
    if(hr > 12){
        hr = hr - 12
    }
    return hr;
}

const getMin = () => {
    const time = new Date();
    const min = time.getMinutes();
    return min;
}

const getSec = () => {
    const time = new Date();
    const sec = time.getSeconds();
    return sec;
}

const getTimeOfDay = () => {
    const time = new Date();
    const hr = time.getHours();
    let timeOfDay = "AM";
    if(hr > 11){
        timeOfDay = "PM";
    }
    return timeOfDay;
}

const setHtml = (hour, minute, second, timeOfDay) => {
    const hr = document.getElementById("hr");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    const dayTime = document.getElementById("dayTime");

    hr.innerText = addZeroToNumberIfLessThan10(hour);
    min.innerText = addZeroToNumberIfLessThan10(minute);
    sec.innerHTML = addZeroToNumberIfLessThan10(second);

    dayTime.innerText = getTimeOfDay();
}

const setDate = () => {
    const hr = getHr();
    const min = getMin();
    const sec = getSec();

    setHtml(hr, min, sec);
}

setInterval(() => {
    setDate();
    
}, 1000);

