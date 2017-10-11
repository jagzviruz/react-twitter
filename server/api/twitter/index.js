import { Router } from 'express';
import Twitter from './twitter';

const router = Router();

router.get('/', (req, res) => {

  Twitter.search(req.query)
    .then((results) => {
      const data = results.data;
      const { statuses } = results.data;

      if (statuses && statuses.length) {
        res.json(statuses);
      } else {
        res.json({ msg: 'no tweets found'});
      }
    })
    .catch(err => {

    })

});

export default router;
