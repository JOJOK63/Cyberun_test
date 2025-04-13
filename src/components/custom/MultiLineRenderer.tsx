import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';

import '../custom/multiLineRenderer.css';

const MultiLineRenderer = ({ data, label }: ControlProps) => {
  return (
    <div className="multiLineRenderer-content">
      <p className="multiLine-label">{label}:</p>
      <pre className="multiLine-value">{data ?? '-'}</pre>
    </div>
  );
};

export default withJsonFormsControlProps(MultiLineRenderer);
