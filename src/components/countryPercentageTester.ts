import { rankWith } from '@jsonforms/core';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';

export const countryPercentageTester = rankWith(
  4,
  (uischema: UISchemaElement, schema: JsonSchema) =>
    !!(
      schema?.type === 'array' &&
      schema.items &&
      !Array.isArray(schema.items) &&
      schema.items.type === 'object' &&
      schema.items.properties?.country &&
      schema.items.properties?.percent
    ),
);
