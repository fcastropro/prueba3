import React from 'react';

interface AlertProps {
  type: 'success' | 'info' | 'warning' | 'danger'; // Bootstrap types
  message: string;
  dismissible?: boolean;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, dismissible = false, onClose }) => {
  return (
    <div className={`alert alert-${type} ${dismissible ? 'alert-dismissible fade show' : ''}`} role="alert">
      {message}
      {dismissible && (
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
      )}
    </div>
  );
};

export default Alert;
