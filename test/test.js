/**
 * Created by Beinnova.
 * User: Giorgio Cerruti
 * Site URL : http://www.beinnova.it
 * Date: 19/06/14
 * Time: 15.58
 *
 */

var Timer = require("../lib/timer").Timer;

var task_1 = new Timer();
var check = false;




task_1.newTask(1, function(){
    check = true;

}, function(){
    check = false;
})

task_1.on("task:start", function(){
    if(check)
        console.log("Partito");

    console.log("Task 1 Start!");
})

task_1.on("task:stop", function(){
    if(!check)
        console.log("Fermato");
    console.log("Task 1 Stop!");
})

task_1.start();