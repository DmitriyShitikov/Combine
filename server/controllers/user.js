const database = require('../models/database');

module.exports.getUser = function (req, res) {
database
    .getUserById(req.params)
    .then((results) => {
      if (results) {
        res.json(results);
      } else {
        res
          .status(400)
          .json({err: 'User not found'});
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};

module.exports.Login = function (req, res) {
database
    .getUserByEmail(req.params.email)
    .then((results) => {
      if (results.map(el => el.password).includes(req.query.password) ) {
        res.json(results);
      } else {
        res
          .status(400)
          .json({err: 'User not found'});
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};
//

module.exports.addUser = function (req, res) {
  database
    .addUser(req.body)
    .then((results) => {
      res
        .status(201)
        .json(results);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};
//
module.exports.addCost = function (req, res) {
  database
    .addCost(req.body)
    .then((results) => {
      res
        .status(201)
        .json(results);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};

module.exports.delCosts = function (req, res) {
  database
    .delCost(req.params.id)
    .then((results) => {
      res.send(console.log(results))
        .status(201)
        .json(results);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};


module.exports.getCosts = (req, res, next) => {
    database
        .getCostById(req.params.id)
        .exec()
        .then((result) => {
            // let period = result.filter(el =>{
            let period = result.filter(el =>(el.date).getTime() >= new Date(req.query.startDate).getTime() && (el.date).getTime() <= new Date(req.query.endDate).getTime())
            console.log(period);
            period.filter(el => {
                if (req.query.category === 'Категория') {

                    res.status(200).json({
                        Message: 'Your budget',
                        budget: period,
                        query: req.query
                    })
                } else {
                    let cost = result.filter(el => el.category === req.query.category)
                    res.status(200).json({
                        Message: 'Your budget',
                        budget: cost,
                        query: req.query
                    })
                }
        })
            console.log(new Date(req.query.startDate).getTime());
            console.log(new Date(req.query.endDate).getTime());
    })
        .catch(error => {
            res.status(500).json(error)
        })
}


// module.exports.getCostCat = (req, res, next) => {
//     database
//         .getCostById(req.body.id)
//         .exec()
//         .then((result) => getCostCat(result))
//         // .getCostCat(req.body.category)
//         .then((cost) => {
//             // const budget = cost.budgets;
//             res.status(200).json({
//                 Message: 'Your budget',
//                 budget: cost,
//                 query: req.query
//             })
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// };

// module.exports.findOne = function (req, res) {
//     database
//         .getByLogin(req.body.login)
//             // .exec()
//             .then((user) => {
//                 const budget = user.budgets;
//                 res.status(200).json({
//                     Message: 'Your budget',
//                     budget: budget,
//                     query: req.query
//                 })
//             })
//             .catch(error => {
//                 res.status(500).json(error)
//             })
// }

// module.exports.delUser = function (req, res) {
//     database
//         .del(req.params.id)
//         .then((results) => {
//             if (results) {
//                 res.json(results);
//             } else {
//                 res
//                     .status(400)
//                     .json({err: 'User not found'});
//             }
//         })
//         .catch((err) => {
//             res
//                 .status(400)
//                 .json({err: err.message});
//         })
// };



