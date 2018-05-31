import LinkedList from '../linked-list/LinkedList';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(HashTablesize = defaultHashTableSize) {
    this.buckets = Array(HashTablesize)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    return hash % this.buckets.length;
  }

  insert(key, value) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    });
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  delete(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    });
    if (node) {
      return bucketLinkedList.delete(node.value);
    }
    return null;
  }

  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    });
    return node ? node.value : null;
  }
}
