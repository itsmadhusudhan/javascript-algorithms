import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;
    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @param {LinkedList}
   */
  prepend(value) {
    this.head = new LinkedListNode(value, this.head);
    return this;
  }

  /**
   * @param {*} value
   * @param {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    // if head has to be deleted then make next node as head
    if (this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    // if next node has to be deleted
    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // check if tail must be deleted
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    const deletedTail = this.tail;
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} findParams.callback
   * @return {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * @return {LinkedListNode[]}
   */

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /**
   * @param {function}[callback]
   * @return {string}
   */

  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }
}
