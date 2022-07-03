let input = {
    'hello_ui': {
        compoent_main: {
            card: {
                score:1
            },
            span:{
                score:3
            }
        },
        test_compoent:{
            score:4
        }
    }
  }
  let expectedOutput = {
      "hello_ui": {
          "compoent_main":{
              "card":{
                  "score":1
                },"span":{
                    "score":3
                },"score":4
            },
            "test_compoent": {
                "score":4
            },
            "score":8
        }
    }
  function setScore(input) {
    let score = 0;
    for (let key in input) {
       if (!input[key].score) {
         input[key] = setScore(input[key]);
         console.log( input[key])
       }
      
       if(input[key]) {
         score += input[key].score;
       }
    }
    
    input.score = score;
    
    return input;
  }
  console.log(setScore(input));