import { useState } from "react";
import { FaTools } from "react-icons/fa";

const UpdateNotice = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-[rgb(29,63,180)] px-8 py-6 text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/15 flex items-center justify-center">
            <FaTools className="text-white text-2xl" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Website Enhancement in Progress
          </h2>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <p className="text-gray-700 leading-relaxed mb-6">
            Thank you for visiting ITCLUB Foundation.
            We are currently improving our website by adding new programs,
            resources, and features to provide a better experience for our
            visitors and supporters.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-sm text-gray-600">
            Some sections may still be under development, while the rest of
            the website remains accessible for browsing.
          </div>

          <button
            onClick={() => setShow(false)}
            className="bg-[#fe8d02] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
          >
            Continue to Website
          </button>
        </div>

      </div>
    </div>
  );
};

export default UpdateNotice;