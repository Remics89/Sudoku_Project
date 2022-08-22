let puzzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7],
];
let puzzleCopy = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

let p8zzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [8, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

// function to grab each row of numbers

function getRow(grid, row) {
    return grid[row];
}

// function to grab each column of numbers

function getColumn(grid, col) {
    let colArr = [];
    for (let i = 0; i < grid.length; i++) {
        colArr.push(grid[i][col]);
    }
    return colArr;
}

// function to grab each 3x3 block of numbers

function getSection(grid, x, y) {
    let gridArray = [];
    x *= 3;
    y *= 3;
    for (let row = y; row < y + 3; row++) {
        for (let col = x; col < x + 3; col++) {
            gridArray.push(grid[row][col]);
        }
    }
    return gridArray;
}

// function to check if each section contains numbers 1 through 9
function includes1to9(sub) {
    let arrayCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < arrayCheck.length; i++) {
        if (!sub.includes(arrayCheck[i])) {
            return false;
        }
    }
    return true;
}

// function to validate the Sudoku Board

console.log(SudokuValidator(puzzleCopy));
function SudokuValidator(grid) {
    for (let rowCHK = 0; rowCHK < 9; rowCHK++) {
        let returnedRow = includes1to9(getRow(puzzleCopy, rowCHK));
        console.log(returnedRow);
        if (returnedRow === false) {
            // console.log('failed on getrow check')
            return `A row has an error. You may have a missing number or a duplicate.`;
        }
    }
    for (let colCHK = 0; colCHK < 9; colCHK++) {
        let returnedCol = includes1to9(getColumn(puzzleCopy, colCHK));
        console.log(returnedCol);
        if (returnedCol === false) {
            // console.log('failed on getcol check');
            return `A Column has an error. You may have a missing number or a duplicate.`;
        }
    }
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (includes1to9(getSection(grid, x, y)) !== true) {
                return `A 3x3 block has an error. You may have a missing number or a duplicate.`;
            }
        }
    }
    return `Congratulations! You have completed the board.`;
}
