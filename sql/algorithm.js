const GET_LIST = `
  SELECT 
    id, 
    link, 
    title, 
    img_url, 
    short_description AS short_desc
  FROM algorithm;
`;

const GET_ONE = `
  SELECT 
    id, 
    link, 
    title, 
    img_url, 
    short_description AS short_desc,
    description AS desc
  FROM algorithm
  WHERE link = $1;
`;

const GET_FILE = `
  SELECT title, link
  FROM algorithm
  WHERE id = $1;
`;

module.exports = {
  GET_LIST,
  GET_ONE,
  GET_FILE,
};