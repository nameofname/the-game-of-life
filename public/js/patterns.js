"use strict";

var pulsar = [
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,],
    [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,],
    [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,],
    [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,],
    [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,],
    [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,],
    [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,]
];

var gun = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,true,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,true,true,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,true,true,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,true,true,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,true,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
    [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,]
];

var walker = [
    [false, true, false],
    [true, false, false],
    [true, true, true]
];

var tallLine = [
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true],
    [true]
];

var growingHeart = [
    [true, true, false, false, true, true],
    [true, false, false, false, false, true],
    [true, false, false, false, false, true],
    [false, true, false, false, true, false],
    [false, false, true, true, false, false],
];