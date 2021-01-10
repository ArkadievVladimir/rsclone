import { body } from 'express-validator';

export const createTweetValidations = [
  body('text', 'Enter tweet text')
    .isString()
    .isLength({
    max: 280,
  }).withMessage('Incorrect tweet length. Allowed number of characters is up to 40.'),
];
