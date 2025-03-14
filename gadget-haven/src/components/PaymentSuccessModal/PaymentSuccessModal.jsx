import paymentImg from "/assets/Group.png";

const PaymentSuccessModal = ({ isVisible, setIsVisible, total }) => {
  const handleClose = () => {
    setIsVisible(false);
    console.log("Modal closed");
  };

  const handleViewReceipt = () => {};

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative bg-white rounded-lg p-8 w-96 max-w-full text-center shadow-lg pointer-events-auto">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 bg-transparent border-none"
          onClick={handleClose}
        >
          &times;
        </button>

        <img
          src={paymentImg}
          alt="Success Icon"
          className="w-24 h-24 mx-auto mb-6"
        />

        <h2 className="text-2xl font-semibold text-green-500 mb-4">
          Payment Successfully
        </h2>

        <p>Thanks for purchasing</p>
        <p className="text-gray-500 mb-6">{total}</p>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium"
          onClick={handleViewReceipt}
        >
          View Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
