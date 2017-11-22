import { Router } from 'express';
import Twitter from './twitter';

const router = Router();

router.get('/', (req, res) => {

  Twitter.search(req.query)
    .then((results) => {
      const data = results.data;
      const { statuses } = results.data;

      res.json(statuses);

    })
    .catch(err => {
      console.log(err);
    })

});

export default router;
