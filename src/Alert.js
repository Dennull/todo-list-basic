import React from "react";

const Alert = ({ message, type, removeAlert, list }) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
