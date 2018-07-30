/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Find method by id
 * Note: This is called every time that the parameter :accountId is used in a URL. 
 * Its purpose is to preload the method on the req object then call the next function. 
 */
exports.method = function (req, res) {
    console.log('id => ' + req.params.id);
    const id = req.params.id;
    db.Method.find({
        where: {
            id: id
        }
    }).success(function (method) {
        if (!method) {
            return res.status(500).json({
                message: "No Method found"
            });
        } else {
            return res.status(200).json(method);
        }
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};

/**
 * Create a method
 */
exports.create = function (req, res) {
    // augment the method by adding the UserId

    // save and return and instance of method on the res object. 
    db.Method.create(req.body).success(function (method) {
        if (!method) {
            return res.status(500).json({
                message: "Something went wrong"
            });
        } else {
            return res.status(200).json(method);
        }
    }).error(function (err) {
        return res.status(500).json({
            message: err.code==="ER_DUP_ENTRY"? 'Method already exists' : err.code
        });
    });
};

/**
 * Update a method
 */
exports.update = function (req, res) {

    // create a new variable to hold the method that was placed on the req object.
    

    db.Method.find({where:{id:req.params.id}}).success(function(method){

        if(method){
            method.updateAttributes({
                name: req.body.name,
                type: req.body.type
            }).success(function (a) {
                return res.status(200).json(method);
            }).error(function (err) {
                return res.status(500).json({
                    message: "Something went wrong"
                });
            });
        }else{
            return res.status(500).json({
                message: "No method was found with the provided id"
            });
        }

    }).error(function(){
        return res.status(500).json({
            message: "something went wrong while finding method with the provided id"
        });
    });

    
};

/**
 * Delete an method
 */
exports.destroy = function (req, res) {

    // create a new variable to hold the method that was placed on the req object.
    const id = req.params.id;

    db.Method.find({
        where: {
            id: id
        }
    }).success(function (method) {
        if (!method) {
            return res.status(500).json({
                message: "No user found with the provided id"
            });
        } else {
            //delete referenced entries
            db.Entry.find({where:{
                MethodId:id
            }}).success(function(entry){
                if(entry){
                    entry.destroy({ force: true });
                }
            });

            method.destroy({
                where: {
                    id: id
                }
            }).success(function () {
                return res.status(200).json(method);
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
 * List of method
 */
exports.all = function (req, res) {
    db.Method.findAll().success(function (accounts) {
        return res.status(200).json(accounts);
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};