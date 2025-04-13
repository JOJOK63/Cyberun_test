import { rankWith, isMultiLineControl } from '@jsonforms/core';

export const multiLineTester = rankWith(4, isMultiLineControl);
