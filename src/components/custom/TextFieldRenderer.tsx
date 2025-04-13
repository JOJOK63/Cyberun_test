import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';
import '../custom/textFieldRenderer.css';

const TextFieldRenderer = ({ data, label }: ControlProps) => {
  return (
    <div className="textFieldRenderer-content">
      <p className="p1">{label}:</p>
      <p className="p2">{data ?? '-'}</p>
    </div>
  );
};

export default withJsonFormsControlProps(TextFieldRenderer);
