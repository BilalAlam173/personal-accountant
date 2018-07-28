/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Find category by id
 * Note: This is called every time that the parameter :accountId is used in a URL. 
 * Its purpose is to preload the category on the req object then call the next function. 
 */
exports.category = function (req, res) {
    console.log('id => ' + req.params.id);
    const id = req.params.id;
    db.Category.find({
        where: {
            id: id
        }
    }).success(function (category) {
        if (!category) {
            return res.status(500).json({
                message: "No Category found"
            });
        } else {
            return res.status(200).json(category);
        }
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};

/**
 * Create a category
 */
exports.create = function (req, res) {
    // augment the category by adding the UserId

    db.Account.find({where:{id:req.body.AccountId}}).success(function(account){
        if(account){
            let category = req.body;
            category.account = account.name; 
            db.Category.create(req.body).success(function (category) {
                if (!category) {
                    return res.status(500).json({
                        message: "Something went wrong"
                    });
                } else {
                    return res.status(200).json(category);
                }
            }).error(function (err) {
                return res.status(500).json({
                    message: err.code==="ER_DUP_ENTRY"? 'Category already exists' : err.code
                });
            });
        }else{
            return res.status(500).json({
                message: "Account not found"
            }); 
        }

    }).error(function(){
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};

/**
 * Update a category
 */
exports.update = function (req, res) {

    // create a new variable to hold the category that was placed on the req object.
    

    db.Category.find({where:{id:req.params.id}}).success(function(category){

        if(category){
            category.updateAttributes({
                name: req.body.name,
            }).success(function (a) {
                return res.status(200).json(category);
            }).error(function (err) {
                return res.status(500).json({
                    message: "Something went wrong"
                });
            });
        }else{
            return res.status(500).json({
                message: "No category was found with the provided id"
            });
        }

    }).error(function(){
        return res.status(500).json({
            message: "something went wrong while finding category with the provided id"
        });
    });

    
};

/**
 * Delete an category
 */
exports.destroy = function (req, res) {

    // create a new variable to hold the category that was placed on the req object.
    const id = req.body.id;

    db.Category.find({
        where: {
            id: id
        }
    }).success(function (category) {
        if (!category) {
            return res.status(500).json({
                message: "No user found with the provided id"
            });
        } else {
            //delete referenced entries
            db.Entry.find({where:{
                AccountId:id
            }}).success(function(entry){
                entry.destroy({ force: true });
            });
            category.destroy({
                where: {
                    id: id
                }
            }).success(function () {
                return res.status(200).json(category);
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
 * List of category
 */
exports.all = function (req, res) {
    db.Category.findAll().success(function (accounts) {
        return res.status(200).json(accounts);
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};