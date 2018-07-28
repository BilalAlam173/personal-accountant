const user = require('../routes/user');
const account = require('../routes/account');
const category = require('../routes/category');
const method = require('../routes/method');
const entry = require('../routes/entry');


exports.init = function (app) {
user.init(app);
account.init(app);
category.init(app);
method.init(app);
entry.init(app);


};