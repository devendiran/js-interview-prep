// Throttling with limit not missing the last throttle

function throttle(fn, delay) {
    const _self = this;
    let lastrun = null;
    return function (...args) {
        if(!lastrun) {
            fn.apply(_self, args);
            lastrun = Date.now();
        } else {
            setTimeout(() => {
                if(Date.now() - lastrun >= delay) {
                    fn.apply(_self, args);
                    lastrun = Date.now();
                }
            }, delay - (Date.now() - lastrun));
        }
    }
}