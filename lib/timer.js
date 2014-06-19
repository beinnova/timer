/**
 * Created by Beinnova.
 * User: Giorgio Cerruti
 * Site URL : http://www.beinnova.it
 * Date: 19/06/14
 * Time: 15.18
 *
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');


function Timer(){

    this._task;
    this._timeOut;
    this._nextExecTask
}

util.inherits(Timer, EventEmitter);

Timer.prototype.start = function(){

    var self  =this;
    var _time = this._task.minutes * 60 * 1000;
    this._nextExecTask = (function(){
        var _date = new Date();
        return _date.setTime(_date.getTime() + _time);

    })()

    if(typeof this._task.onSTart === 'function')
        this._task.onSTart();
    this._timeOut = setTimeout(function(){
        self._task.onstop()
        self.stop();
    },_time);

    this.emit("task:start");
}

Timer.prototype.stop = function(){
    var self = this;
    clearInterval(self._timeOut);
    this.emit("task:stop");

}

Timer.prototype.restart = function(){
    if(undefined != this._task){
        this.stop();
        this.start();
    }
}

Timer.prototype.getCountDown = function(){

    return new Date(this._nextExecTask);
}
Timer.prototype.newTask = function(minutes, cbOnStart, cbOnStop){

    var _task = {
        minutes : minutes
    }
    if(typeof minutes !== 'object'){

        if(undefined != cbOnStart)
            _task.onSTart = cbOnStart;

        if(undefined != cbOnStop)
            _task.onstop = cbOnStop

    }else{
        throw new Error("Valore non ammesso");
    }

    this._task = _task;


}




exports.Timer = Timer;



