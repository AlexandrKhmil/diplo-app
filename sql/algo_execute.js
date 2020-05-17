module.exports = `
  SELECT title, link
  FROM algorithm
  WHERE id = $1;
`;