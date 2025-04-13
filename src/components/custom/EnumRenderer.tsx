import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';

import '../custom/enumRenderer.css';

const EnumRenderer = ({ data, label, schema }: ControlProps) => {
  const enumValues = schema?.enum || [];

  return (
    <div className="enumRenderer-content">
      <p className="question">{label}</p>
      <ul className="answers">
        {enumValues.length > 0 ? (
          enumValues.map((value, index) => (
            <li
              key={index}
              className={value === data ? 'answer selected' : 'answer'}>
              {value}
            </li>
          ))
        ) : (
          <li className="answer empty">No options available</li>
        )}
      </ul>
    </div>
  );
};

export default withJsonFormsControlProps(EnumRenderer);
