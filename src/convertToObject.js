'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const linesArr = sourceString.split(';');
  const objPropertiesArr = [];
  const finalObject = {};

  // Catching the object properties and their values
  for (let i = 0; i < linesArr.length; i++) {
    linesArr[i] = linesArr[i].trim();

    if (linesArr[i]) {
      objPropertiesArr.push(linesArr[i].split(':'));
    }
  }

  for (let j = 0; j < objPropertiesArr.length; j++) {
    finalObject[objPropertiesArr[j][0].trim()] = objPropertiesArr[j][1].trim();
  }

  return finalObject;
}

module.exports = convertToObject;
