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
var task_2 = new Timer();

task_2.newTask(1, function(){

    setTimeout(function(){
        console.log("Next:", task_2.getCountDown())
    }, 500);
},function(){
    task_1.start();
})


task_1.newTask(1, null, function(){

    task_2.start();

})

task_1.on("task:start", function(){
    console.log("Task 1 Start!");
})

task_1.on("task:stop", function(){
    console.log("Task 1 Stop!");
})
task_2.on("task:start", function(){
    console.log("Task 2 Start!");
})

task_2.on("task:stop", function(){
    console.log("Task 2 Stop!")
})
task_1.start();