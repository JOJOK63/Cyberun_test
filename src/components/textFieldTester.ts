import { rankWith, isStringControl, RankedTester } from '@jsonforms/core';

export const textFieldTester: RankedTester = rankWith(
  3, // priorités plus faibles pour éviter d'entrer en conflit avec le enumTester
  isStringControl,
);
