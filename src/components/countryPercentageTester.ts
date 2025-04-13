import { rankWith, and, isControl, schemaMatches } from '@jsonforms/core';

export const countryPercentageTester = rankWith(
  4,
  and(
    isControl,
    schemaMatches(
      schema =>
        schema.type === 'array' &&
        schema.items?.type === 'object' &&
        schema.items?.properties?.country &&
        schema.items?.properties?.percent,
    ),
  ),
);
