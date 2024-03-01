import { camelCase } from 'lodash';

export const toCamelCase = <T>(item: T): T | T[] => {
  // Function to convert an object to camelCase
  const convertObjectToCamelCase = (
    obj: Record<string, unknown>,
  ): Record<string, unknown> => {
    const converted: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object' && !Buffer.isBuffer(value)) {
        converted[camelCase(key)] = convertObjectToCamelCase(
          value as Record<string, unknown>,
        );
      } else {
        converted[camelCase(key)] = value;
      }
    }
    return converted;
  };

  // Function to convert an array of objects to camelCase
  const convertArrayToCamelCase = (array: T[]): T[] => {
    return array.map((item) => {
      if (typeof item === 'object' && !Buffer.isBuffer(item)) {
        return convertObjectToCamelCase(item as Record<string, unknown>) as T;
      }
      return item;
    });
  };

  if (!item) {
    return item;
  }

  if (Array.isArray(item)) {
    return convertArrayToCamelCase(item);
  }

  if (typeof item === 'object') {
    return convertObjectToCamelCase(item as Record<string, unknown>) as T;
  }

  return item;
};
