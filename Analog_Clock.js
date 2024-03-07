setInterval(() => {
    dt = new Date();
    hr = dt.getHours();
    mn = dt.getMinutes();
    sc = dt.getSeconds();
    hr_rotation = (30*hr +(mn/2));
    mn_rotation = (6*mn);
    sc_rotation = (6*sc);

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${mn_rotation}deg)`;
    second.style.transform = `rotate(${sc_rotation}deg)`;
}, 1000);