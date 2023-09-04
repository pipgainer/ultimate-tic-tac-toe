import React, { useState } from "react";
import Square from "../atoms/Square";

function TicTacToe({ xIsNext, handlePlayerChange, handleGameWon, activeGameBoard, handleActiveGameBoard, gameBoardNumber }) {
    const [board, setBoard] = useState(Array(9).fill(null));

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                handleGameWon(squares[a], gameBoardNumber);
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i) => {
        const squares = [...board];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setBoard(squares);
        handlePlayerChange();
        handleActiveGameBoard(i);
    };

    const renderSquare = (i) => (
        <Square
            value={board[i]}
            onClick={() => handleClick(i)}
            winningSquare={winner}
            isActive={activeGameBoard === -1 ? true : activeGameBoard === gameBoardNumber}
            playerToPlay={xIsNext ? "X" : "O"}
        />
    );

    const winner = calculateWinner(board);
    const status = winner
        ? `Winner: ${winner}`
        : `Next player: ${xIsNext ? "X" : "O"}`;

    return (
        <div className="bg-black-200">
            <div className="bg-black shadow-md p-2 sm:p-4 md:p-8 rounded-lg">
                <div className="grid grid-cols-3 gap-0 md:gap-4 sm:gap-2">
                    {Array(9)
                        .fill(null)
                        .map((_, i) => (
                            <div key={i}>{renderSquare(i)}</div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;
