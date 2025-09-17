'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyLine = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
  const propertyAndValue = [];
  const declaration = {};

  // Catching the object properties and their values
  for (let i = 0; i < propertyLine.length; i++) {
    propertyLine[i] = propertyLine[i].trim();

    if (propertyLine[i]) {
      propertyAndValue.push(propertyLine[i].split(':'));
    }
  }

  for (let j = 0; j < propertyAndValue.length; j++) {
    if (propertyAndValue[j][1].trim().length > 0) {
      declaration[propertyAndValue[j][0].trim()] =
        propertyAndValue[j][1].trim();
    }
  }

  return declaration;
}

module.exports = convertToObject;
