


function asyncCall(id, cb) {
    const delay = Math.round(Math.random() * (3000 - 500)) + 500;
    setTimeout(() => {
        cb('User' + id);
    }, delay);
}


function mapLimit(inputs, limit, iterator, callback) {
    const result =[];
    let proccessedInputs = 0;
    let completedResponseCount  = 0;

    function processAsyncTask(id) {
      proccessedInputs++;
      function cbHandler(res) {
        completedResponseCount++;
        result[id] = res;
        if (proccessedInputs < inputs.length) {
            processAsyncTask(proccessedInputs);
        }
        if (completedResponseCount === inputs.length) {
            callback(result);
        }
      }

      iterator(inputs[id], cbHandler);
    }
    for (let i = 0; i < limit; i++) {
        processAsyncTask(i);
    }
}

mapLimit([1,2,3,4,5], 2, asyncCall, function(result) {
  console.log(result, '.....');
})