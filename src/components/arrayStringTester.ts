import { rankWith } from '@jsonforms/core';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';

export const arrayStringTester = rankWith(
  3,
  (uischema: UISchemaElement, schema: JsonSchema) =>
    !!(
      schema?.type === 'array' &&
      schema.items &&
      !Array.isArray(schema.items) &&
      schema.items.type === 'string'
    ),
);
