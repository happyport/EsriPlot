
var Plot = {
    version: "1.0.0"
};

function expose() {
    var old = window.Plot;

    Plot.noConflict = function () {
        window.Plot = old;
        return this;
    };

    window.Plot = Plot;
}

// define P for Node module pattern loaders, including Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Plot;

// define P as an AMD module
} else if (typeof define === 'function' && define.amd) {
    define(Plot);
}

// define gispace as a global P variable, saving the original P to restore later if needed
if (typeof window !== 'undefined') {
    expose();
}