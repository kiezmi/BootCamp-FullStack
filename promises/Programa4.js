var promise = new Promise(function (fulfill, reject) {
    fulfill("I FIRED");
    var e = new Error("I DID NOT FIRE");
    reject(e);
});

function onReject(error) {

    console.log(error);
}

promise.then(onReject, onReject);


///////////////Solucion//////////////////////

/* 'use strict';

    var promise = new Promise(function (r, j) {
      r('I FIRED');
      j(new Error('I DID NOT FIRE'));
    });

    function onReject(error) {
      console.log(error.message);
    }

    promise.then(console.log, onReject);
    promise.then(console.log).catch(onReject); */