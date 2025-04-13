import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { ControlProps } from '@jsonforms/core';

import '../custom/countryPercentageRenderer.css';

const CountryPercentageRenderer = ({ data, label }: ControlProps) => {
  // data devrait être un tableau d’objets avec { country, percent }
  const countries = Array.isArray(data) ? data : [];

  return (
    <div className="country-percentage-renderer">
      <p className="cpr-label">{label}</p>
      {countries.length > 0 ? (
        <ul className="cpr-list">
          {countries.map((item, index) => (
            <li key={index} className="cpr-item">
              <span className="cpr-country">{item.country}</span>
              <div className="cpr-bar-container">
                <div
                  className="cpr-bar-fill"
                  style={{ width: `${item.percent}%` }}></div>
                <span className="cpr-percent">{item.percent}%</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cpr-empty">No country data available</p>
      )}
    </div>
  );
};

export default withJsonFormsControlProps(CountryPercentageRenderer);
