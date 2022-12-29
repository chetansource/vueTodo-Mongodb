export const renameKey = (object, key, newKey) => {
  object[newKey] = object[key]
  delete object[key]
  return object
}
