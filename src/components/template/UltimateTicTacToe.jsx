import React, { useState, useEffect } from 'react'
import TicTacToe from '../molecules/TicTacToe'
import Modal from "../atoms/Modal";
import HowToPlayModal from '../atoms/HowToPlayModal';


const UltimateTicTacToe = () => {

    const [ultimateBoard, setUltimateBoard] = useState(Array(9).fill(null));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playerWon, setPlayerWon] = useState("");
    const [gameKey, setGameKey] = useState(Math.random);
    const [xIsNext, setXIsNext] = useState(true);
    const [activeGameBoard, setActiveGameBoard] = useState(-1);
    const [isHowToPlayModalOpen, setIsHowToPlayModalOpen] = useState(false);

    useEffect(() => {
        setIsHowToPlayModalOpen(true);
    }, []);

    const configureBorder = {
        0: 'border-r-4',
        1: 'border-r-4',
        3: 'border-t-4 border-r-4',
        4: 'border-t-4 border-r-4',
        5: 'border-t-4',
        6: 'border-t-4 border-r-4',
        7: 'border-t-4 border-r-4',
        8: 'border-t-4'
    }

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
                setPlayerWon(xIsNext ? "O" : "X");
                setIsModalOpen(true);
                return squares[a];
            }
        }
        return null;
    };

    const handleActiveGameBoard = (e) => {
        if (ultimateBoard[e]) {
            console.log("its setting the game board to -1");
            return setActiveGameBoard(-1);
        }
        console.log("its setting the game board to", e);
        setActiveGameBoard(e);
    }

    const handlePlayerChange = () => {
        setXIsNext(!xIsNext);
    }

    const handleGameWon = (player, i) => {
        const squares = [...ultimateBoard];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setUltimateBoard(squares);
    };

    const handleRestartGame = () => {
        setIsModalOpen(false);
        setGameKey(Math.random);
        setActiveGameBoard(-1);
        setXIsNext(true);
        setUltimateBoard(Array(9).fill(null));
    }

    return (
        <div key={gameKey} className="grid grid-cols-3">
            {Array(9)
                .fill(null)
                .map((_, i) => (
                    <div className={configureBorder[i]} key={i}>
                        <TicTacToe
                            xIsNext={xIsNext}
                            handlePlayerChange={() => handlePlayerChange()}
                            activeGameBoard={activeGameBoard}
                            gameBoardNumber={i}
                            handleActiveGameBoard={(e) => handleActiveGameBoard(e)}
                            handleGameWon={(player, gameBoardNumber) => handleGameWon(player, gameBoardNumber)}
                        />
                    </div>
                ))}

            <Modal
                isOpen={isModalOpen}
                onClickRestart={() => handleRestartGame()}
                player={playerWon}
            />
            <HowToPlayModal isOpen={isHowToPlayModalOpen} onClose={() => setIsHowToPlayModalOpen(!isHowToPlayModalOpen)} />
        </div>
    )
}

export default UltimateTicTacToe