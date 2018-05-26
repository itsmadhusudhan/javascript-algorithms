import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");
  });
});
