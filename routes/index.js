const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'helo dimas'
  });
});

router.get('/dimas', (req, res) => {
  res.json({
    title: 'ini dimas'
  });
});

module.exports = router;
