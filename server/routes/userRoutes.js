const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/save-user', async (req, res) => {
    const { address, balance, network } = req.body;
  
    try {
      let user = await User.findOne({ address });
      if (!user) {
        user = new User({ address, balance, network });
        await user.save();
      } else {
        user.balance = balance;
        user.network = network;
        await user.save();
      }
      res.json({ success: true, user });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  
router.get('/get-user/:address', async (req, res) => {
    try {
      const user = await User.findOne({ address: req.params.address });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.json({ success: true, user });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

module.exports = router;
