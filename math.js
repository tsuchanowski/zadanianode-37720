function losuj(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    Math.floor(Math.random() * b + a)

    return Math.floor(Math.random() * b + a)
};

function losujAlfa(n) {
    var r = "";
    while (n--) r += String.fromCharCode((r = Math.random() * 62 | 0, r += r > 9 ? (r < 36 ? 55 : 61) : 48));

    return r;
}

function losujMinMax(min, max, z) {
        for (let n = 1; n < z; n++) {
        min[n] = Math.ceil(min);
        max[n] = Math.floor(max);
        console.log(Math.floor(Math.random() * max  + min));
    }
    return Math.floor(Math.random() * max  + min)
};

module.exports = {
    losuj: losuj,
    losujAlfa: losujAlfa,
    losujMinMax: losujMinMax
}


