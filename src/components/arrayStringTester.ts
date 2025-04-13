import { rankWith, isControl } from '@jsonforms/core';
import type { JsonSchema } from '@jsonforms/core';

export const arrayStringTester = rankWith(
  5,
  (uischema, schema: JsonSchema) =>
    isControl(uischema) &&
    schema?.type === 'array' &&
    typeof schema.items === 'object' &&
    (schema.items as JsonSchema).type === 'string',
);
