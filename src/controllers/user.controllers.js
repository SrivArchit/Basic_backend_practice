import { asynchandler } from '../util/asynchandler.js';

const registerUser = asynchandler(async (req, res) => {
  res.status(201).json({
    message: 'User registered successfully',
  });
});   

export { registerUser };