const Node = require('./node');


  
class LinkedList {
  constructor() {
      this.length = 0;
      this._tail = new Node;
      this._head = new Node;
  }
  
  append(data) {
    this.data = data;
     this.node = new Node;
     this.node.data = this.data; 
    if (this.length) {
        this._tail.next = this.node;
        this.node.prev = this._tail;
        this._tail = this.node;
    } else {
        this._head = this.node;
        this._tail = this.node;
    }

    this.length++;

    return this;
 }
    

      
  head() {
     return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    this.index = index;
    let count = 0;
    this.firstNode = this._head;
    while (count < this.index) {
      this.firstNode = this.firstNode.next;
      count++;
    }
    return this.firstNode.data 
  }

  insertAt(index, data) {
    this.index = index;
    let count = 0;
    this.data = data;
    this.firstNode = this._head;
    while (count < this.index) {
      this.firstNode = this.firstNode.next;
      count++;
    }
    this.firstNode.data = this.data;
  }

  isEmpty() {
    if(this.length == 0) {
     return true;
    }
    else {return false}
  }

  clear() {
    this.length = 0;
    this._tail = new Node;
    this._head = new Node;
    return this;
  }

  deleteAt(index) {
    this.index = index;
    let count = 0;
    this.firstNode = this._head;
    this.prevNode = null;
    this.nextNode = null;
    if (this.index === 0) {
      this._head = this.firstNode.next;
      if (this.firstNode.next == null){
        this._tail = null;
      }
      else {
        this._head.prev = null;
      }
      
    }
    else if (this.index === this.length-1) {
        this._tail = this._tail.prev;
        this._tail.next = null;
    }
    else {
      while (count < this.index) {
        this.firstNode = this.firstNode.next;
        count++;
      }
      this.prevNode = this.firstNode.prev;
      this.nextNode = this.firstNode.next;

      this.prevNode.next = this.firstNode.next;
      this.nextNode.prev = this.firstNode.prev;
      this.firstNode = null;

    }
    this.length--

    return this;
  }

  reverse() {
    let count = 0;
    this.prevNode = null;
    this.nextNode = null;

    this.currNode = this._tail;
    this._tail = this._head;
    this._head = this.currNode;
  
    while (count < this.length) {
      this.prevNode = this.currNode.prev;
      this.nextNode = this.currNode.next;

      this.currNode.next = this.prevNode;
      this.currNode.prev = this.nextNode;
      this.currNode = this.currNode.next;
      count++;
    }
    return this;
    
  }

  indexOf(data) {
    this.data = data;
    let count = 0;
    while (count < this.length) {
      if (this.at(count) === this.data) {
        return count;
      }
      count++;
    }
    return -1; }
}

module.exports = LinkedList;
