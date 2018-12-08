const Users = require('./user');
const Costs = require('./costs');


module.exports.getUserById = (paramsId) => Users.findById({"_id": paramsId});
module.exports.getUserByEmail = (paramsEmail) => Users.find({"email": paramsEmail});

module.exports.addUser = function (data) {
    let User = new Users({
        login: data.login,
        email: data.email,
        password: data.password,
        profilePicture: data.profilePicture
    });

    return User.save();
};

module.exports.addCost = function (data) {
    let Cost = new Costs({
        id: data.id,
        name: data.name,
        price: data.price,
        category: data.category,
        date: data.date
    });
    return Cost.save();
  };

module.exports.getUsers = () => Users.find();
module.exports.getCosts = () => Costs.find();
module.exports.delCost = (paramsId) => Costs.findByIdAndRemove({"_id": paramsId});
module.exports.getCostById = (bodyId) => Costs.find({"id": bodyId});
