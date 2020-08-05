import * as express from 'express';

const router  = express.Router();

router.route('/logros')
        .post((req, res) => {
            console.log(req.body);

            res.json({
                demo: "test"
            });
        });

export const apiRouter = router;