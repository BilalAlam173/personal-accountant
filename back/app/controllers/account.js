/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Find account by id
 * Note: This is called every time that the parameter :accountId is used in a URL. 
 * Its purpose is to preload the account on the req object then call the next function. 
 */
exports.account = function (req, res) {
    console.log('id => ' + req.params.id);
    const id = req.params.id;
    db.Account.find({
        where: {
            id: id
        }
    }).success(function (account) {
        if (!account) {
            return res.status(500).json({
                message: "No Account found"
            });
        } else {
            return res.status(200).json(account);
        }
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};

/**
 * Create a account
 */
exports.create = function (req, res) {
    // augment the account by adding the UserId

    // save and return and instance of account on the res object. 
    db.Account.create(req.body).success(function (account) {
        if (!account) {
            return res.status(500).json({
                message: "Something went wrong"
            });
        } else {
            return res.status(200).json(account);
        }
    }).error(function (err) {
        return res.status(500).json({
            message: err.code==="ER_DUP_ENTRY"? 'Account already exists' : err.code
        });
    });
};

/**
 * Update a account
 */
exports.update = function (req, res) {

    // create a new variable to hold the account that was placed on the req object.
    

    db.Account.find({where:{id:req.params.id}}).success(function(account){

        if(account){
            account.updateAttributes({
                name: req.body.name,
                type: req.body.type
            }).success(function (a) {
                return res.status(200).json(account);
            }).error(function (err) {
                return res.status(500).json({
                    message: "Something went wrong"
                });
            });
        }else{
            return res.status(500).json({
                message: "No account was found with the provided id"
            });
        }

    }).error(function(){
        return res.status(500).json({
            message: "something went wrong while finding account with the provided id"
        });
    });

    
};

/**
 * Delete an account
 */
exports.destroy = function (req, res) {

    // create a new variable to hold the account that was placed on the req object.
    const id = req.params.id;


    db.Account.find({
        where: {
            id: id
        }
    }).success(function (account) {
        if (!account) {
            return res.status(500).json({
                message: "No user found with the provided id"
            });
        } else {
            // delete referenced categories
            db.Category.find({where:{
                AccountId:id
            }}).success(function(category){
                if(category){
                    category.destroy({ force: true });
                }
                
            });

            //delete referenced entries
            db.Entry.find({where:{
                AccountId:id
            }}).success(function(entry){
                if(entry){
                    entry.destroy({ force: true });
                }
            });
            account.destroy({
                where: {
                    id: id
                }
            }).success(function () {
                return res.status(200).json(account);
            }).error(function (err) {
                return res.status(500).json({
                    message: "Something went wrong"
                });
            });
        }
    }).error(function () {
        return res.status(500).json({
            message: "Error while finding the user with the provided id"
        });
    });


};


/**
 * List of account
 */
exports.all = function (req, res) {
    db.Account.findAll().success(function (accounts) {
        return res.status(200).json(accounts);
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};