import { body } from 'express-validator';

export const registerValidations = [
  body('email', 'Enter E-Mail')
    .isEmail()
    .withMessage('Wrong E-Mail')
    .isLength({
    min: 10,
    max: 40,
  }).withMessage('Incorrect mail length. Allowed number of characters from 10 to 40.'),
  body('fullname', 'Enter name')
    .isString()
    .isLength({
    min: 2,
    max: 40,
  }).withMessage('Incorrect name length. Allowed number of characters from 2 to 40.'),
  body('username', 'Enter username')
    .isString()
    .isLength({
    min: 2,
    max: 40,
  }).withMessage('Incorrect username length. Allowed number of characters from 2 to 40.'),
  body('password', 'Enter password')
    .isString()
    .isLength({
    min: 6,
  }).withMessage('Incorrect password length. Allowed number of characters from 6.')
    .custom((value, { req }) => {
    if (value !== req.body.password2) {
      throw new Error('Password mismatch');
    } else {
      return value;
    }
  }),
];