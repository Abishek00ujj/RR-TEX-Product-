const express = require('express');
const { getAllPOs, createPO, updatePO, deletePO } = require('../controllers/poController');
const router = express.Router();

router.get('/', getAllPOs);
router.post('/', createPO);
router.put('/:id', updatePO);
router.delete('/:id', deletePO);

module.exports = router;