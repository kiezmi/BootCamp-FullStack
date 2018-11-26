var promise = new Promise(function (res, rej) {

    fullfil('PROMISE VALUE');
});

promise.then(function(a){ console.log(a)}).catch(console.error);

console.log("MAIN PROGRAM");

///////////////Solucion//////////////////////

/* 'use strict';

    var promise = new Promise(function (fulfill, reject) {
      fulfill('PROMISE VALUE');
    });

    // At this point, the value of promise is already known.

    // If promise is not always asynchronous, console.log would be calledwith
    // 'PROMISE VALUE' here. This is not the case.

    promise.then(console.log);

    console.log('MAIN PROGRAM'); */