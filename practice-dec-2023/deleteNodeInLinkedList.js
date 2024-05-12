// Delete a node from a singly-linked list, 
// ↴ given only a variable pointing to that node.
// The input could, for example, be the variable b below:


//  class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const a = new LinkedListNode('A');
// const b = new LinkedListNode('B');
// const c = new LinkedListNode('C');

// a.next = b;
// b.next = c;

// deleteNode(b);
// —-------------------------------------------------------------


class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// x->y->a->b->c->d

// nodeToDelete = a
// a->b->c->d

// rightHead = c->d
// a->rightHead
// b->null

function deleteNode(nodeToDelete) {
    console.log(new LinkedListNode(head))
    let rightHead = nodeToDelete.next.next;
    nodeToDelete.next = rightHead;
    nodeToDelete.next.next = null;
    // let tempHead = 
    // // while (nodeToDelete) {
        
    // // }

    return nodeToDelete;
}

// Tests

let desc = 'node at beginning';
let head = new LinkedListNode(1);
let nodeToDelete = head;
appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

deleteNode(head);

let node = head;
assertEquals(2, node.value, desc);
node = node.next;
assertEquals(3, node.value, desc);
node = node.next;
assertEquals(4, node.value, desc);
assertEquals(node.next, null, desc);

desc = 'node in middle';
head = new LinkedListNode(1);
nodeToDelete = appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

deleteNode(nodeToDelete);

node = head;
assertEquals(1, node.value, desc);
node = node.next;
assertEquals(3, node.value, desc);
node = node.next;
assertEquals(4, node.value, desc);
assertEquals(node.next, null, desc);

desc = 'node at end';
head = new LinkedListNode(1);
appendToList(head, 2);
appendToList(head, 3);
nodeToDelete = appendToList(head, 4);

assertThrows(() => deleteNode(nodeToDelete), desc);

desc = 'node at end';
head = new LinkedListNode(1);
nodeToDelete = head;

assertThrows(() => deleteNode(nodeToDelete), desc);

function appendToList(head, value) {
  let tail = head;
  while(tail.next) {
    tail = tail.next;
  }
  tail.next = new LinkedListNode(value);
  return tail.next;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
