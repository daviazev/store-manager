const errorMap = {
  INVALID_VALUE: 422,
  NAME_REQUIRED: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
