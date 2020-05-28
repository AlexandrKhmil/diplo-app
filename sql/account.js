const SELECT_EMAIL_BY_ID = `
  SELECT email
  FROM account
  WHERE id = $1;
`;

const SELECT_BY_EMAIL = `
  SELECT id, password
  FROM account
  WHERE email = $1;
`;

const FUNC_ADD = 'account_add_func';

module.exports = {
  SELECT_EMAIL_BY_ID,
  SELECT_BY_EMAIL,
  FUNC_ADD,
};