/**
 * Input
 */

import React from 'react';

function Input({ onChange, value }) {
  return (
    <input
      type="text"
      value={value}
      placeholder="todo"
      onChange={onChange}
    />
  );
}

export default Input;