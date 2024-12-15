import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    const [amount, setAmount] = React.useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal Overlay */}
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-80 z-10">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Amount of Funding:</h3>
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="p-2 w-full border border-gray-300 rounded-lg mb-4"
                    placeholder="Enter amount"
                />
                <div className="flex justify-end">
                    <button 
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            onConfirm(amount);
                            onClose();
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
