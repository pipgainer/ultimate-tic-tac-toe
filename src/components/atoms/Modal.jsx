import React from "react";

const Modal = ({ isOpen, onClickRestart, player }) => {
    const modalClasses = `fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`;

    return (
        <>
            {isOpen && (
                <div className={modalClasses}>
                    <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            {/* Modal header */}
                            <div className="flex modal-header justify-center">
                                <h3 className="text-2xl font-semibold">{player} Won The Match</h3>
                            </div>

                            {/* Modal body */}
                            <div className="flex modal-body mt-3 justify-center">
                                Restart the Game?
                            </div>

                            {/* Modal footer */}
                            <div className="flex modal-footer mt-4 justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
                                    onClick={onClickRestart}
                                >
                                    Restart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
