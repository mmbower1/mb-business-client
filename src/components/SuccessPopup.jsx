import React, { useEffect } from "react";

// styled confirmation popup with a checkmark, used by the contact and subscribe forms
export const SuccessPopup = ({ title, message, onClose }) => {
  // close the popup with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-popup-title"
        className="modal-pop w-full max-w-md rounded-2xl border border-blue-500/30 bg-slate-900/95 p-8 text-center shadow-2xl shadow-blue-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/40">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          id="success-popup-title"
          className="mb-3 text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          {title}
        </h3>
        <p className="mb-8 text-gray-300">{message}</p>
        <button
          autoFocus
          onClick={onClose}
          className="w-full rounded-lg bg-blue-600 py-3 px-8 font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
        >
          Close
        </button>
      </div>
    </div>
  );
};
