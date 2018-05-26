import LinkedListNode from "./LinkedListNode";
import Comparator from "../../utils/comparator/Comparator";

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /**@var LinkedListNode */
    this.head = null;
    /**@var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @param {LinkedList}
   */




   /**
    * @return {LinkedListNode[]}
    */

    toArray(){
      const nodes=[];
      let currentNode=this.head;
      while(currentNode){
        nodes.push(currentNode);
        currentNode=currentNode.next;
      }
      return nodes;
    }


    /**
     * @param {function}[callback]
     * @return {string}
     */

     toString(callback){
       return this.toArray().map(node=>node.toString(callback)).toString()
     }

}
