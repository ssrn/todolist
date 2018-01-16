/**
 * Form
 */

import React from 'react';

function Form({ handleSubmit, children, className }) {
  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
}
export default Form;