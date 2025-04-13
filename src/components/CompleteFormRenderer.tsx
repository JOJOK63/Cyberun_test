import React from 'react';
import { JsonForms } from '@jsonforms/react';
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';

import data from '../data/data.json';
import schema from '../data/schema.json';
import uischema from '../data/uischema.json';

import TextFieldRenderer from '../components/custom/TextFieldRenderer';
import { textFieldTester } from './textFieldTester';

import EnumRenderer from '../components/custom//EnumRenderer';
import { enumTester } from './enumTester';

import MultiLineRenderer from '../components/custom/MultiLineRenderer';
import { multiLineTester } from './multiLineTester';

import CountryPercentageRenderer from '../components/custom/CountryPercentageRenderer';
import { countryPercentageTester } from './countryPercentageTester';

import ArrayStringRenderer from '../components/custom/ArrayStringRenderer';
import { arrayStringTester } from './arrayStringTester';

export const CompleteFormRenderer = () => {
  const customRenderers = [
    ...vanillaRenderers,
    { tester: textFieldTester, renderer: TextFieldRenderer },
    { tester: enumTester, renderer: EnumRenderer },
    { tester: multiLineTester, renderer: MultiLineRenderer },
    { tester: countryPercentageTester, renderer: CountryPercentageRenderer },
    { tester: arrayStringTester, renderer: ArrayStringRenderer },
  ];

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={customRenderers}
      cells={vanillaCells}
      readonly={true} // clé ici
    />
  );
};
