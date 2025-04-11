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

export const CompleteFormRenderer = () => {
  const customRenderers = [
    ...vanillaRenderers,
    { tester: textFieldTester, renderer: TextFieldRenderer },
    { tester: enumTester, renderer: EnumRenderer },
  ];

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={customRenderers}
      cells={vanillaCells}
      //readonly={true} // clé ici
    />
  );
};
