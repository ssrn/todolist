/**
 * Button
 */

import React from 'react';

function Button({ className, btnType, disabled, children }) {
  return (
    <button
      className={className}
      type={btnType}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;