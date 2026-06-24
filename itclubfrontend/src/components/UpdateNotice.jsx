import { useState, useEffect } from "react";

export default function UpdateNotice() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(100);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setProgress((prev) => {
          if (prev <= 2) {
            clearInterval(interval);
            setShow(false);
            return 0;
          }
          return prev - 2;
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isHovered]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-slate-900 max-w-md w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-800 text-slate-300"
      >
        {/* Header */}
        <div className="px-4 py-4 text-center border-b border-slate-700">
          <img
            src="/logo.png"
            alt="IT CLUB FOUNDATION Logo"
            className="h-12 md:h-16 w-auto mx-auto mb-3"
          />

          <h2 className="text-xl md:text-2xl font-bold text-slate-50">
            Website Update Notice
          </h2>
          <h5> By Arzoo</h5>
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Welcome to{" "}
            <strong className="text-slate-50">ITCLUB Foundation</strong>.
            Our website is currently being updated.
          </p>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-[#0045d4] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status */}
          <p className="text-xs text-slate-500 mb-4">
            {isHovered
              ? "Auto close paused"
              : `Closing in ${Math.max(
                  1,
                  Math.ceil((progress / 100) * 5)
                )} seconds`}
          </p>

          {/* Button */}
          <button
            onClick={() => setShow(false)}
            className="bg-[#0045d4] hover:bg-[#0038ad] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}