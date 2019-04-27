function reverseInt(num) {
    let stringify = num.toString();

    return parseInt(stringify.split('').reverse().join('')) * Math.sign(num);

};


reverseInt(-1423)