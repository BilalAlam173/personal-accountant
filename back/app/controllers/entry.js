/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Find entry by id
 * Note: This is called every time that the parameter :accountId is used in a URL. 
 * Its purpose is to preload the entry on the req object then call the next function. 
 */
exports.entry = function (req, res) {
    console.log('id => ' + req.params.id);
    const id = req.params.id;
    db.Entry.find({
        where: {
            id: id
        }
    }).success(function (entry) {
        if (!entry) {
            return res.status(500).json({
                message: "No Entry found"
            });
        } else {
            return res.status(200).json(entry);
        }
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};

/**
 * Create a entry
 */
exports.create = async function (req, res) {
    // augment the entry by adding the UserId

    const account = await db.Account.find({where:{id:req.body.AccountId}});
    const category = await db.Account.find({where:{id:req.body.CategoryId}});
    const method = await db.Account.find({where:{id:req.body.MethodId}});

        if(account && category && method){
            let entry = req.body;
            entry.account = account.name;
            entry.method = method.name; 
            entry.category = category.name;  
            db.Entry.create(req.body).success(function (entry) {
                if (!entry) {
                    return res.status(500).json({
                        message: "Something went wrong"
                    });
                } else {
                    return res.status(200).json(entry);
                }
            }).error(function (err) {
                return res.status(500).json({
                    message: err.code==="ER_DUP_ENTRY"? 'Entry already exists' : err.code
                });
            });
        }else{
            return res.status(500).json({
                message: "one or more foriegn key is invalid or not provided"
            }); 
        }
};

/**
 * Update a entry
 */
exports.update = function (req, res) {

    // create a new variable to hold the entry that was placed on the req object.
    

    db.Entry.find({where:{id:req.params.id}}).success(function(entry){

        if(entry){
            entry.updateAttributes({
                name: req.body.name,
            }).success(function (a) {
                return res.status(200).json(entry);
            }).error(function (err) {
                return res.status(500).json({
                    message: "Something went wrong"
                });
            });
        }else{
            return res.status(500).json({
                message: "No entry was found with the provided id"
            });
        }

    }).error(function(){
        return res.status(500).json({
            message: "something went wrong while finding entry with the provided id"
        });
    });

    
};

/**
 * Delete an entry
 */
exports.destroy = function (req, res) {

    // create a new variable to hold the entry that was placed on the req object.
    const id = req.body.id;

    db.Entry.find({
        where: {
            id: id
        }
    }).success(function (entry) {
        if (!entry) {
            return res.status(500).json({
                message: "No user found with the provided id"
            });
        } else {
            entry.destroy({
                where: {
                    id: id
                }
            }).success(function () {
                return res.status(200).json(entry);
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
 * List of entry
 */
exports.all = function (req, res) {
    db.Entry.findAll().success(function (accounts) {
        return res.status(200).json(accounts);
    }).error(function (err) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    });
};