/*
   Create a Task Runner which can run at max 'n' tasks in parallel. At any given point only 'n' tasks can run in parallel and any extra tasks needs to wait until any task from running has finished executing
*/
 
 
class Runner {
    constructor (val) {
      this.maxTasks  = val;
      this.totalTaskCount = 0;
      this.taskInQue = [];
      this.priorityQue = [];
    }
 
  
    runTask(task, priority) {
        if (this.totalTaskCount < this.maxTasks) {
             this.totalTaskCount++;
             // Any predefined function to be called after the task is completed
             task((taskId) => {
                 console.log(taskId, 'Completed');
                 this.totalTaskCount--;
                 if (this.taskInQue.length) {
                     this.runTask(this.taskInQue.shift(), this.priorityQue.shift());
                 }
             });
        } else {
            if (!this.priorityQue.length) {
                this.taskInQue.push(task);
                this.priorityQue.push(priority);
            } else {
                let queIndex = this.getQueIndexBaseOnPriority(priority);
                this.priorityQue.splice(queIndex,0, priority);
                this.taskInQue.splice(queIndex,0, task);
                console.log(this.priorityQue);
            }
 
        }
    }
 
    getQueIndexBaseOnPriority(priority) {
       let index = 0;
       for (let i = 0; i < this.priorityQue.length;i++) {
          if (this.priorityQue[i] >= priority) {
             index = this.priorityQue[i] > priority ? i - 1 : i;
             break;
          }
          index = i;
       }
       return index +1;
    }
   
 }
  
 /* Function to run task and call a callback after the execution is done */
 
 function task(num) {
    var returnFn = function(fn) {
        setTimeout(function() {
            Promise.resolve(fn(num))
        }, 1500);
    }
    return returnFn;
 }
 // parallel: 3
 const runner = new Runner(3);
 runner.runTask(task(1), 1)
 runner.runTask(task(2), 2)
 runner.runTask(task(3), 3)
  
 runner.runTask(task(4), 1)
 runner.runTask(task(5), 5)
 runner.runTask(task(6), 2)
 runner.runTask(task(7), 1)
 runner.runTask(task(8), 2)
 
 //0-100
 //4, 7,6,8,5. [4,7,6,8,5] [1,5]