import { rankWith, and, isControl, schemaMatches } from '@jsonforms/core';
import type { JsonSchema } from '@jsonforms/core';

export const countryPercentageTester = rankWith(
  4,
  and(
    isControl,
    schemaMatches((schema: JsonSchema) => {
      if (
        schema.type !== 'array' ||
        typeof schema.items !== 'object' ||
        schema.items === null
      ) {
        return false;
      }

      const itemSchema = schema.items as JsonSchema;

      return (
        itemSchema.type === 'object' &&
        typeof itemSchema.properties === 'object' &&
        'country' in itemSchema.properties &&
        'percent' in itemSchema.properties
      );
    }),
  ),
);
