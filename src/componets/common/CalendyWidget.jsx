import React, { useEffect } from "react";
import Modal from "./Modal";

const CalendlyWidget = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]); // Load script only when the modal is open

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule A Meeting">
      {/* Calendly inline widget */}
      <div
        data-url="https://calendly.com/neuracodesolutions/30min?primary_color=822ec8"
        className="calendly-inline-widget h-[80vh] w-full"
      ></div>
    </Modal>
  );
};

export default CalendlyWidget;
