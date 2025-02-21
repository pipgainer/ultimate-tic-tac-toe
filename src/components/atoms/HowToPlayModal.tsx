import React from "react";

type HowToPlayModalProps = {
    isOpen: Boolean; // Define the type as string or null
    onClose: () => void;
};

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
            <div className="modal-container bg-black w-full max-w-sm sm:max-w-md mx-4 sm:mx-auto rounded shadow-lg z-50 p-4 border-4 border-white overflow-y-auto max-h-screen">
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">How to Play Ultimate Tic-Tac-Toe</h2>
                    <p className="mb-2">Ultimate Tic-Tac-Toe is a strategic variation of the classic game. Here are the rules:</p>
                    <ol className="list-decimal ml-4 text-sm sm:text-base">
                        <li>The game consists of nine smaller 3x3 Tic-Tac-Toe boards, arranged in a 3x3 grid.</li>
                        <li>Players take turns placing their symbol ("X" or "O") in one of the smaller boards...</li>
                        <li>If a player wins a smaller board, they claim that board with their symbol, and it counts as one of their wins towards winning the larger board.</li>
                        <li>The first player to win three smaller boards in a row (horizontally, vertically, or diagonally) or win the larger board by claiming five smaller boards wins the game.</li>
                    </ol>
                    <p className="mt-4">Have fun playing Ultimate Tic-Tac-Toe!</p>
                </div>
                <div className="mt-4 text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowToPlayModal;
