import { rankWith, isControl } from '@jsonforms/core';

export const arrayStringTester = rankWith(
  5,
  (uischema, schema) =>
    isControl(uischema) &&
    schema?.type === 'array' &&
    schema.items?.type === 'string',
);
