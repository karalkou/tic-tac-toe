class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.turns = 0;
        this.position = [];

        for (let i=0; i<3; i+=1) {
            let tmp = new Array(3);
            this.position.push(tmp);
        }
    }

    getCurrentPlayerSymbol() {
        //console.log('this.currentPlayer: ', this.currentPlayer);
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        let currentVal = this.getFieldValue(rowIndex, columnIndex);
        if ( !currentVal ) {
            this.position[rowIndex][columnIndex] = this.currentPlayer;
            if ( this.currentPlayer === 'x' ) {
                this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
            } else {
                this.currentPlayer = this.currentPlayer === "0" ? "x" : "o";
            }

            this.turns++;
        }
    }

    isFinished() {

    }

    getWinner() {
        let B = this.position;

        //check rows
        /*for(let i = 0; i <= 6; i = i + 3) {
            if( B[i] !== undefined && B[i] === B[i + 1] && B[i + 1] === B[i + 2] ) {
                console.log( B[i] + "-won" );
                return true;
            }
        }

        //check columns
        for(let i = 0; i <= 2 ; i++) {
            if(B[i] !== undefined && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
                console.log( B[i] + "-won" );
                return true;
            }
        }

        //check diagonals
        for(let i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if (B[i] !== undefined && B[i] === B[i + j] && B[i + j] === B[i + 2 * j]) {
                console.log( B[i] + "-won" );
                return true;
            }
        }*/

        /* my implementation */
        // check rows
        for ( let i=0; i<3; i+=1 ) {
            for ( let j=0; j<3; j+=1 ) {
                if( B[i][j] && B[i][j] === B[i][j+1] && B[i][j+1] === B[i][j+2] ){
                    console.log(''+B[i][j]+' wins!!');
                    return B[i][j];
                }
            }
            console.log('B['+i+']: ', B[i]);

        }console.log('---rows---');
        // check cols
        for ( let i=0; i<3; i+=1 ) {
            for ( let j=0; j<3; j+=1 ) {
                if( B[i][j] && B[i+1] && B[i+2] && B[i][j] === B[i+1][j] && B[i+1][j] === B[i+2][j] ){
                    console.log(''+B[i][j]+' wins!!');
                    return B[i][j];
                }
            }
            console.log('B['+i+']: ', B[i]);

        }console.log('---cols---');
        // check diagonals
        for ( let i=0; i<3; i+=1 ) {
            for ( let j=0; j<3; j+=1 ) {
                if( B[i][j] && B[i+1] && B[i+2] && B[i][j] === B[i+1][j+1] && B[i+1][j+1] === B[i+2][j+2] ){
                    console.log(''+B[i][j]+' wins!!');
                    return B[i][j];
                }
            }
            console.log('B['+i+']: ', B[i]);

        }console.log('---diagonals---');

        return null;


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
