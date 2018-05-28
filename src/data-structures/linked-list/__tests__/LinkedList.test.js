import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");
  });
});

//append method

it("should append the node to the list",()=>{
  const linkedList=new LinkedList();
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  linkedList.append(1)
  linkedList.append(2)
  expect(linkedList.toString()).toBe('1,2')
});

it("should prepend the node to the list",()=>{
  const linkedList=new LinkedList();
  linkedList.append(1);
  linkedList.prepend(2);
  expect(linkedList.toString()).toBe('2,1');
});


it("should delete node by value from the list",()=>{
  const linkedList=new LinkedList();
  expect(linkedList.delete(5)).toBeNull();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);

  expect(linkedList.head.toString()).toBe('1');
  expect(linkedList.tail.toString()).toBe('5');

  const deletedNode=linkedList.delete(3);
  expect(deletedNode.value).toBe(3)
  expect(linkedList.toString()).toBe('1,2,4,5');
  linkedList.delete(1)
  expect(linkedList.head.toString()).toBe('2');
  expect(linkedList.tail.toString()).toBe('5');
});


it("should delete linked lit tail",()=>{
  const linkedList=new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);

  expect(linkedList.head.toString()).toBe('1');
  expect(linkedList.tail.toString()).toBe('5');

})