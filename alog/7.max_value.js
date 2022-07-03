function findMaxlevel(root){
    let result = [];
    if(!root) {
        return result;
    }
    let que = [root];
    result.push(root.data);
    let levelNodes = [];
    while(que.length) {
        let elm = que.pop();
        elm.left ? levelNodes.push(elm.left) : '';
        elm.right ? levelNodes.push(elm.right) : '';
        if (!que.length) {
            if(levelNodes.length) {
               result.push(Math.max.apply(null,levelNodes.map(node => node.data)));
            }

            que = levelNodes;
            levelNodes = [];
        }
    }
    return result;
}


function findMaxlevelWithoutAuxilaryArr(root){
    let result = [];
    if(!root) {
        return result;
    }
    let que = [root];

    let maxLength = -Infinity;
    let level = 0;
    let count = 1;
    while(que.length) {
        let elm = que.shift();
        count--;
        if (elm) {
            que.push(elm.left);
            que.push(elm.right);
            maxLength = Math.max(maxLength, elm.data);
        }

        if (count <= 0) {
            level++;
            count = Math.pow(2, level);
            console.log(count)
            if(maxLength > 0) {
                result.push(maxLength);
            }
            maxLength = -Infinity;
        }
    }
    return result;
}


 
class Node
{
    constructor(data) {
       this.left = null;
       this.right = null;
       this.data = data;
    }
}
 
// Function to insert nodes in level order
function insertLevelOrder(arr, i)
{
    let root = null;
    // Base case for recursion
    if (i < arr.length) {
        root = new Node(arr[i]);

        // insert left child
        root.left = insertLevelOrder(arr, 2 * i + 1);

        // insert right child
        root.right = insertLevelOrder(arr, 2 * i + 2);
    }
    return root;
}

let arr = [ 1, 2, 3, 4, 15,4,6, 6, 6, 66,6,7, 9,2,21,3];
root = insertLevelOrder(arr, 0);

console.log(findMaxlevelWithoutAuxilaryArr(root))
console.log(findMaxlevel(root))

    //             1

    //         2     3

    //     4     15  4   6

    // 6   6   66  6 7 9 2
