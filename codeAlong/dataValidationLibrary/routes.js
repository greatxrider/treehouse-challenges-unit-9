'use strict';

const { check, validationResult } = require('express-validator');
const express = require('express');
const bcrypt = require('bcrypt');

// This array is used to keep track of user records
// as they are created.
const users = [];

// Construct a router instance.
const router = express.Router();

// Route that returns a list of users.
router.get('/users', (req, res) => {
  res.json(users);
});

// Storing ValidationChain on a variable
// const nameValidationChain = check('name')
//   .exists({ checkNull: true, checkFalsy: true })
//   .withMessage('Please provide a value for "name"');

// const emailValidationChain = check('email')
//   .exists({ checkNull: true, checkFalsy: true })
//   .withMessage('Please provide a value for "email"');

router.post('/users', [
  check('name')
    .exists()
    .withMessage('Please provide a value for "name"'),
  check('email')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Please provide a value for "email"')
    .isEmail()
    .withMessage('Please provide a valid email address'),
  check('birthday')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Please provide a value for "birthday"')
    .isISO8601()
    .withMessage('Please provide a valid date for "birthday"'),
  check('password')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Please provide a value for "password"')
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be between 8 and 20 characters long'),
  check('confirmedPassword')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Please provide a value for "confirmedPassword"')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Confirmed password does not match the password')
], async (req, res) => {

  // Attempt to get the validation result from the Request object.
  const errors = validationResult(req);

  // If there are validation errors...
  if (!errors.isEmpty()) {
    // Use the Array `map()` method to get a list of error messages.
    const errorMessages = errors.array().map(error => error.msg);

    // Return the validation errors to the client.
    res.status(400).json({ errors: errorMessages });
  } else {
    // Get the user from the request body.
    const { name, email, birthday, password } = req.body;

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user object with the hashed password
      const user = { name, email, birthday, password: hashedPassword };

      // Add the user to the `users` array.
      users.push(user);

      // Set the status to 201 Created and end the response.
      res.status(201).end();
    } catch (error) {
      // Handle any errors that occur during hashing
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

module.exports = router;
