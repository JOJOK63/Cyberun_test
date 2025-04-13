import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';

import '../custom/enumRenderer.css';

const EnumRenderer = ({ data, label, uischema, schema }: ControlProps) => {
  // Vérifier le contenu de uischema.scope
  console.log('UISchema Scope:', uischema.scope);

  // Récupérer le nom du champ à partir du scope pour obtenir la bonne propriété dans le schéma
  const property = uischema.scope.split('/')[2];
  console.log('Property name:', property);

  // Récupérer les options de l'énumération à partir du schéma
  const enumValues = schema?.properties?.[property]?.enum || [];
  console.log('Enum values:', enumValues);

  return (
    <div className="enumRenderer-content">
      <p>{label}</p>
      <div>
        {enumValues.length > 0 ? (
          enumValues.map((value, index) => <p key={index}>{value}</p>)
        ) : (
          <p>No options available</p>
        )}
      </div>
      <div>
        {/* Afficher la réponse sélectionnée */}
        <p style={{ fontWeight: 'bold', color: 'orange' }}>
          Selected Answer: {data ?? 'No answer selected'}
        </p>
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(EnumRenderer);
