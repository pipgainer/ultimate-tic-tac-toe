import React from "react";

// Define the type for the 'value' prop
type SquareProps = {
    value: string | null; // Define the type as string or null
    onClick: () => void;
    winningSquare: String;
    isActive: Boolean;
    playerToPlay: string
};

const Square: React.FC<SquareProps> = ({ value, onClick, winningSquare, isActive, playerToPlay }) => {

    const squareClasses =
        `h-16 w-9 sm:w-12 md:w-16 p-0 m-0 hover:bg-blue-200 text-4xl text-center flex items-center justify-center sm:w-[50px]
        ${winningSquare === "X" ? "bg-blue-300" : winningSquare === "O" ? "bg-red-300" : ""}`;


    const configurePlayerBoard: any = {
        X: '1px solid blue',
        O: '1px solid red'
    }

    return (
        <button
            className={squareClasses}
            onClick={onClick}
            style={{ border: isActive ? configurePlayerBoard[playerToPlay] : '1px solid #999', color: value === "X" ? 'blue' : 'red' }}
            disabled={winningSquare === "" || isActive === false}
        >
            {value}
        </button>
    );
};

export default Square;
