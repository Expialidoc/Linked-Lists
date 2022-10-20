/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newN = new Node(val);
    if (this.head === null) this.head = newN;
    if (this.tail !== null) this.tail.next = newN;
    this.tail = newN; this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newN = new Node(val);
    if (this.head === null) this.head = newN;
    newN.next = this.head;
    this.head = newN;

    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) console.log("List is empty!");
    let curr = this.head;
    let beforeLast = this.head;
    while (curr.next) {
      beforeLast = curr;
      curr = curr.next;
    }
    beforeLast.next = null;
    this.tail = beforeLast;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return curr.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) { console.log("List is empty!"); return; }
    let curr = this.head;
    this.head = this.head.next;
    // this.head = curr.next; 
    this.length--;
    // if the List is empty now, there isn't a tail anymore
    if (!this.length) {
      this.tail = null;
    }

    return curr.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let index = 0, curr = this.head;
    while (curr !== null) {
      if (index === idx) return curr.val;
      index++;
      curr = curr.next;
    }
    return -1;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    let index = 0, curr = this.head;
    while (curr !== null) {
      if (index === idx) { curr.val = val; return; }
      index++;
      curr = curr.next;
    }
    console.log("Invalid index!");
    return;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (this.length > 0 && (idx < 0 || idx > this.length - 1))
      return console.log("Please enter a valid index.");
    else {

      let newN = new Node(val);
      let curr, prev, index = 0;
      curr = this.head;

      if (idx < 0 || idx > this.length) {
        return console.log("Please enter a valid index.");
      } else if (idx === 0) {
        newN.next = curr; this.head = newN; 
        if(this.length ===0) this.tail = newN;
        this.length++;
      } else if(idx === this.length) {
        return this.push(val);
      } else {

        while (curr !== null) {
          if (index === idx) {
            newN.next = curr;
            prev.next = newN;
            this.length++;
            // return;
          }
          prev = curr; curr = curr.next;
          index++;
        }
      }
    }
  }
  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0)
      return console.log("List is empty!");

    let index = 0, prev, curr = this.head;

    if (idx < 0 || idx > this.length-1) {
      return console.log("Please enter a valid index");
    } else if (idx === 0) {
      if(this.length ===1){this.head = curr.next; this.tail = null; this.length--; return curr;}
      this.head = curr.next; this.length--; return curr;
    } else {
      while (curr !== null) {
        if (index === idx) { prev.next = curr.next; this.length--;
          if(this.length ===0){this.tail = null;} return curr; }
        index++;
        prev = curr;
        curr = curr.next;
      }
    }
  }
    /** average(): return an average of all values in the list */

    average() {
      let tot =0, curr = this.head;
      if(this.length ===0){
        return 0;
      }else if(this.length ===1){
        return this.head.val;
      }else{ 
        while(curr){
          tot += curr.val;
          curr = curr.next;
        }
        return tot/this.length;
      }
    }
  }

module.exports = LinkedList;
