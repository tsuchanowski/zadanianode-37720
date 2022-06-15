function losuj(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    Math.floor(Math.random() * b + a)

    return Math.floor(Math.random() * b + a)
};

function losujAlfa(n) {
    var r = "";

    while (n--) {
    r += String.fromCharCode((r = Math.random() * 64, r += r > 9 || 91<r<96 ? (r < 47 ? 57 : 65) : 48));
    }

    return r;
}

function losujMinMax(min, max, z) {
    let tab = new Array(z);
    
        for (let n = 0; n < z; n++) {
        min[n] = Math.ceil(min);
        max[n] = Math.floor(max);
        tab[n] = (Math.floor(Math.random() * (max-min+1)  + min));
        
    }
    return tab;
};

module.exports = {
    losuj: losuj,
    losujAlfa: losujAlfa,
    losujMinMax: losujMinMax
}


