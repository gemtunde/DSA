//singly link list is a data structure that contains head, tail and next, and each node links to another.
//each node is made up of a value and next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //push
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //push ends

  //pop starts
  // Hello -> How -> Are -> You -> !
  //  current
  //  newTail
  pop() {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //pop ends

  //shift start
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  //shift end

  //unshift start
  //shift start
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  //shift end

  //unshift start
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length++;
    return this;
  }
  //unshift ends

  //get a node value starts
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (index !== counter) {
      current = current.next;
      counter++;
    }
    return current.val;
  }
  //get ends

  //set is used to update a nodes value
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return foundNode;
    }
    return false;
  }
  //set ends

  //insert inputs a new node to the position/index specificed/given
  //insert inputs a new node to the position/index specificed/given

  insert(index, value) {
    let current = this.head;
    let newTail = current;
    let counter = 0;
    let newNode = new Node(value);
    if (index < 0) return null;
    if (index >= this.length) {
      this.push(value);
      return this;
    }
    if (index === 0) {
      this.unshift(value);
      return this;
    }
    while (index !== counter) {
      newTail = current;
      current = current.next;
      counter++;
    }
    newTail.next = newNode;
    newNode.next = current;
    this.length++;
    return this;
  }
  //insert ends

  //remove starts
  remove(index) {
    if (index < 0) return null;
    if (index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let counter = 0;
    let currentHead = this.head;
    let newTail = currentHead;
    while (index !== counter) {
      newTail = currentHead;
      currentHead = currentHead.next;
      counter++;
    }
    newTail.next = currentHead.next;
    this.length--;
    return this;
  }
  //remove ends
}

let list = new SinglyLinkList();
list.push("hi");
list.push("there");
list.push("how");
list.push("are you");
