describe("Sudoku Puzzle", () => {
    it("is a function?", () => {
        expect(typeof getSection).toEqual("function");
    });

    it("grabs the upper-left 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 0, 0);
        expect(returnedValue).toEqual([8, 9, 5, 2, 7, 1, 4, 6, 3]);
    });

    it("grabs the upper-middle 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 1, 0);
        expect(returnedValue).toEqual([7, 4, 2, 9, 6, 3, 5, 8, 1]);
    });

    it("grabs the upper-right 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 2, 0);
        expect(returnedValue).toEqual([1, 3, 6, 4, 8, 5, 7, 9, 2]);
    });

    it("grabs the middle-left 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 0, 1);
        expect(returnedValue).toEqual([9, 3, 4, 5, 1, 7, 6, 8, 2]);
    });

    it("grabs the middle 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 1, 1);
        expect(returnedValue).toEqual([6, 1, 7, 2, 3, 8, 4, 5, 9]);
    });

    it("grabs the middle-right 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 2, 1);
        expect(returnedValue).toEqual([2, 5, 8, 9, 6, 4, 3, 7, 1]);
    });

    it("grabs the lower-left 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 0, 2);
        expect(returnedValue).toEqual([1, 5, 9, 7, 4, 6, 3, 2, 8]);
    });

    it("grabs the lower-middle 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 1, 2);
        expect(returnedValue).toEqual([8, 7, 4, 3, 2, 5, 1, 9, 6]);
    });

    it("grabs the lower-right 3x3 block of the nested arrays", () => {
        let returnedValue = getSection(puzzle, 2, 2);
        expect(returnedValue).toEqual([6, 2, 3, 8, 1, 9, 5, 4, 7]);
    });
});
