 
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

// [3,2]

function zizag(root) {
  const result = [];
  if (!root) {
      return result;
  }
  let level = 0;
  let isLeftToRight = true;
  let que = [root];
  let leafNodeCounts = 1;
  let zigzagList  = [];
  while(que.length) {
    let node = que.shift();
    --leafNodeCounts;
    if (node) {
        que.push(node.left);
        que.push(node.right);
        if (isLeftToRight) {
            zigzagList.push(node.data);
        } else {
            zigzagList.unshift(node.data);
        }
    }

    if (leafNodeCounts === 0) {
        isLeftToRight = !isLeftToRight;
        result.push(zigzagList);
        zigzagList = [];
        level++;
        leafNodeCounts = Math.pow(2, level);
    }
  }
  return result;
}


function zizagV2(root) {
    const result = [];
    if (!root) {
        return result;
    }
    let level = 0;
    // let isLeftToRight = true;
    let que = [root];
    result.push([root.data]);
    let leafNodeCounts = 1;
    while(que.length) {
      let node = que.shift();
      --leafNodeCounts;
      if (node) {
          que.push(node.left);
          que.push(node.right);
      }
  
      if (leafNodeCounts === 0) {
          console.log(level % 2 === 0, level)
          if(level +1 % 2 === 0) {
            result.push(que.slice().filter(a => a).map(a => a.data));
          } else {
              console.log('....')
            console.log(level, que.slice().reverse().filter(a => a).map(a => a.data))
            result.push(que.slice().filter(a => a).map(a => a.data).reverse());
          }

          level++;
          leafNodeCounts = Math.pow(2, level);
      }
    }
    return result;
  }
console.log(zizagV2(root))