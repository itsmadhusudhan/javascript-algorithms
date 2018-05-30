import LinkedList from "../linked-list/LinkedList";
import LinkedListNode from "../linked-list/LinkedListNode";

export default class Stack{
  constructor(){
    this.linkedList=new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty(){
    return !this.linkedList.tail;
  }

  /**
   * @return {*}
   */
  peek(){
    if(this.isEmpty()){
      return null;
    }
    return this.linkedList.tail.value;
  }

  /**
   * @param {*} value
   */
  push(value){
    this.linkedList.append(value);
  }

  /**
   * @return {*}
   */
  pop(){
    const removeTail=this.linkedList.deleteTail();
    return removeTail?removeTail.value:null;
  }

  /**
   * @return {*[]}
   */
  toArray(){
    return this.linkedList.toArray().map(linkedListNode=>linkedListNode.value).reverse();
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback){
    return this.linkedList.toString(callback);
  }



}