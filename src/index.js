// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let count = currency;
    let money = {};
    let h = 50, q = 25, d = 10, n = 5, p = 1;
    if (currency < 1 || typeof currency !== 'number') {
        return money;
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        while (true) {
            if (count / h >= 1) {
                let a = Math.floor(count / h);
                count -= a * h;
                money.H = a;
            }
            if (count / q >= 1) {
                let a = Math.floor(count / q);
                count -= a * q;
                money.Q = a;
            }
            if (count / d >= 1) {
                let a = Math.floor(count / d);
                count -= a * d;
                money.D = a;
            }
            if (count / n >= 1) {
                let a = Math.floor(count / n);
                count -= a * n;
                money.N = a;
            }
            if (count / p >= 1) {
                let a = Math.floor(count / p);
                count -= a * p;
                money.P = a;
            }

            if (count === 0) break;
        }
    }
    return money;
}
