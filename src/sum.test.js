import addNums from "./sum";

test("adds 1 + 2 to equal 3", () => {
	expect(addNums(1, 2)).toBe(3);
});
