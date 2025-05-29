const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Admin routes
router.post('/create', pageController.create);           
router.get('/all', pageController.getAll);               
router.put('/update/:id', pageController.update);        
router.delete('/delete/:id', pageController.remove);     
router.patch('/status/:id', pageController.toggleStatus);

// User routes
router.get('/active', pageController.getActive);         


module.exports = router;
