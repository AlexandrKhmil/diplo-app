module.exports = `
  SELECT link
  FROM algorithm
  WHERE id = $1;
`;