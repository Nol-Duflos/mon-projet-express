import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('YAY! ça fonctionne :D Bonjour je viens de naître!');
});

export default router;
