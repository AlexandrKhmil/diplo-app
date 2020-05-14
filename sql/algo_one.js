module.exports = `
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