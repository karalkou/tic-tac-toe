class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.turns = 0;
        this.position = [];

        for (let i=0; i<3; i+=1) {
            let tmp = [];
            this.position.push(tmp);
        }
    }

    getCurrentPlayerSymbol() {
        console.log('this.currentPlayer: ', this.currentPlayer);
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        let currentVal = this.getFieldValue(rowIndex, columnIndex);

        if ( !currentVal ) {
            this.position[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
            this.turns++;
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
        return this.turns === 9;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        let currentRowArr = this.position[rowIndex];
        if ( currentRowArr ){
            let result = currentRowArr[colIndex];
            return result ? result : null;
        }

    }
}

module.exports = TicTacToe;
