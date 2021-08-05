import React from "react";

const Alert = ({ message, type, removeAlert, list }) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

export default Alert;
