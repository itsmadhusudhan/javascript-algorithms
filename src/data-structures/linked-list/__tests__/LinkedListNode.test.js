import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode',()=>{
  it('should create linked list node with value',()=>{
    const node=new LinkedListNode(1);

    expect(node.value).toBe(1)
    
  })
})