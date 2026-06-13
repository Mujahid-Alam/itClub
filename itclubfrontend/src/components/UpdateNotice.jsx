import { useState } from "react";

const UpdateNotice = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
      <div className="bg-white max-w-lg mx-4 p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Website Under Update
        </h2>

        <p className="text-gray-600 mb-6">
          We are currently adding new features and finalizing some sections
          to improve your experience. You are welcome to browse the live
          pages in the meantime.
        </p>

        <button
          onClick={() => setShow(false)}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Proceed to Website
        </button>
      </div>
    </div>
  );
};

export default UpdateNotice;