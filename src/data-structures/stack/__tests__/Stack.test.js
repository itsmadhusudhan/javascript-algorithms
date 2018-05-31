import Stack from '../Stack';

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.linkedList).not.toBeNull();
  });

  it('should stack data to stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.toString()).toBe('1,2');
  });

  it('should peek data from stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('should check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('should pop data from stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should be possible to push/pop objects', () => {
    const stack = new Stack();
    stack.push({ value: 'value1', key: 'key1' });
    stack.push({ value: 'value2', key: 'key2' });

    const stringifier = value => `${value.key}:${value.value}`;
    expect(stack.toString(stringifier)).toBe('key1:value1,key2:value2');
    expect(stack.pop().value).toBe('value2');
    expect(stack.pop().value).toBe('value1');
  });

  it('shoudl be possible to convert stack to array', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});
