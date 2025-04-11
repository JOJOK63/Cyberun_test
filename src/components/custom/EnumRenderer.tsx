import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';

const EnumRenderer = ({ data, label }: ControlProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '0.3rem', color: 'red' }}>
        {label}
      </p>
      <p style={{ margin: 0 }}>{data ?? '-'}</p>
    </div>
  );
};

export default withJsonFormsControlProps(EnumRenderer);
