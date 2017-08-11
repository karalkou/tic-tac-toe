class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.turns = 0;
        this.winner = null;
        this.position = [];

        for (let i=0; i<3; i+=1) {
            let tmp = new Array(3);
            this.position.push(tmp);
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        let currentVal = this.getFieldValue(rowIndex, columnIndex);
        if ( !currentVal ) {
            this.position[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer === 'x' ? this.currentPlayer = 'o' : this.currentPlayer = 'x';
            this.turns++;

            if (
                  (this.position[0][0] && this.position[0][0] === this.position[0][1] && this.position[0][0] === this.position[0][2])
                ||(this.position[1][0] && this.position[1][0] === this.position[1][1] && this.position[1][0] === this.position[1][2])
                ||(this.position[2][0] && this.position[2][0] === this.position[2][1] && this.position[2][0] === this.position[2][2])
                ||(this.position[0][0] && this.position[0][0] === this.position[1][1] && this.position[0][0] === this.position[2][2])
                ||(this.position[0][2] && this.position[0][2] === this.position[1][1] && this.position[0][2] === this.position[2][0])
                ||(this.position[0][0] && this.position[0][0] === this.position[1][0] && this.position[0][0] === this.position[2][0])
                ||(this.position[0][1] && this.position[0][1] === this.position[1][1] && this.position[0][1] === this.position[2][1])
                ||(this.position[0][2] && this.position[0][2] === this.position[1][2] && this.position[0][2] === this.position[2][2])
            ){
                this.winner = this.currentPlayer;
            }
        }
    }

    isFinished() {
        return this.isDraw() || !!this.getWinner();
    }

    getWinner() {
        if (this.winner === 'x') {
            return 'o';
        }
        else if (this.winner === 'o') {
            return 'x'
        }
        else return null;
    }

    noMoreTurns() {
        return this.turns === 9;
    }

    isDraw() {
        return this.noMoreTurns() && !this.winner;
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
