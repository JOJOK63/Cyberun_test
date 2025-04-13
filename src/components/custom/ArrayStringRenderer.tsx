import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';
import '../custom/arrayStringRenderer.css';

const ArrayStringRenderer = ({ data, label }: ControlProps) => {
  if (!Array.isArray(data)) return null;

  return (
    <div className="arrayStringRenderer">
      <p className="title">{label}</p>
      <ul className="badges">
        {data.map((item, index) => (
          <li key={index} className="badge">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withJsonFormsControlProps(ArrayStringRenderer);
