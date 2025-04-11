import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';

const TextFieldRenderer = ({ data, label }: ControlProps) => {
  return (
    <div className="bg-grey-500  flex">
      <p style={{ fontWeight: 'bold', marginBottom: '0.3rem', color: 'red' }}>
        {label}
      </p>
      <p style={{ margin: 0 }}>{data ?? '-'}</p>
    </div>
  );
};

export default withJsonFormsControlProps(TextFieldRenderer);
