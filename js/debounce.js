function debounce(fn, limit) {
    let timer;
    return function (...args) {
        let _self = this;
        clear(timer);
        timer = setTimeout(() => {
            fn.apply(_self,args);
        }, limit);
    }
}