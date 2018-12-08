const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/user');


router.get('/log/:email', ctrlUsers.Login);

router.get('/budget/:id', ctrlUsers.getCosts);

router.post('/reg', ctrlUsers.addUser);

router.post('/budget/', ctrlUsers.addCost);

// router.get('/budget/:id', ctrlUsers.getCosts);
// router.delete('/budget/:id', (req,res) => (res.send(console.log(req.params.id))));
router.delete('/budget/:id', ctrlUsers.delCosts);

// router.get('/:name', (req, res, next) => {
//     ctrlUsers.findOne({
//         name: req.body.name
//     })
//         .exec()
//         .then((user) => {
//             const budget = user.budgets;
//             res.status(200).json({
//                 Message: 'Your budget',
//                 budget: budget,
//                 query: req.query
//             })
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// });

// router.del('/:id', ctrlUsers.delUser);

module.exports = router;