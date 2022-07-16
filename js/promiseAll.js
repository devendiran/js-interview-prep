const tasks = [task(3000,1), task(2000,2), task(1000,3)];

function task(time, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id);
        }, time)
    })
}

// function promiseAll(tasks) {
//     let completedPromise = 0;
//     let result = [];

//     return new Promise((resolve, reject) => {
//         tasks.forEach((task, index) => {
//           task.then((res) => {
//             completedPromise++;
//             result[index] = res;
//             if (completedPromise === tasks.length) {
//                 resolve(result);
//             }
//           }).catch((error) => {
//               reject(error);
//           });
//         });
//     });
// }

function promiseAll(tasks) {

    return tasks.reduce((accumulator, value) => {
        console.log('tt')
      return accumulator.then(results => {
        return value.then(result => {
            return typeof results === 'number' ? [results, result] : [...results, result];
        });
      });
    });
}

promiseAll(tasks).then((result) => {
  console.log(result);
});

console.log('test');
Promise.resolve([]).then(() => {
    console.log('endter')
});
console.log('test2');