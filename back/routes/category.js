var category = require('../app/controllers/category');

exports.init = function (app) {
    /**
     * @api {post} /category Create new category
     * @apiName Create
     * @apiGroup Category
     *
     *
     * @apiSuccess {String} name Account title/name.
     * @apiSuccess {FK} AccountId.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
        {
            "name": "Transport",
            "AccountId": 1,
            "account": "Income",
            "id": 1,
            "updatedAt": "2018-07-28T20:13:12.000Z",
            "createdAt": "2018-07-28T20:13:12.000Z"
        }
    *
    *
    @apiError Unknown Something went wrong.

        */
    app.post('/category', category.create);

    /**
     * @api {post} /category get all accounts
     * @apiName Get all
     * @apiGroup Category
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
        [{
            "name": "Transport",
            "AccountId": 1,
            "account": "Income",
            "id": 1,
            "updatedAt": "2018-07-28T20:13:12.000Z",
            "createdAt": "2018-07-28T20:13:12.000Z"
        }]
    *
    *
    @apiError Unknown Something went wrong.

        */
    app.get('/category', category.all);

    /**
     * @api {delete} /category delete an category
     * @apiName Delete
     * @apiGroup Category
     *
     *  * @apiSuccess {PK} id unique id
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
        {
            "name": "Transport",
            "AccountId": 1,
            "account": "Income",
            "id": 1,
            "updatedAt": "2018-07-28T20:13:12.000Z",
            "createdAt": "2018-07-28T20:13:12.000Z"
        }
    *
    *
    @apiError server No user found with the provided id.*@apiError server Something went wrong.*@apiError server Error
    while finding the user with the provided id
    */

    app.delete('/category', category.destroy);

    /**
     * @api {put} /category update an category
     * @apiName Delete
     * @apiGroup Category
     *
     * @apiParam {PK} id unique ID.
     * @apiSuccess {String} name Account title/name.
     * @apiSuccess {FK} AccountId.

     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     * 
        {
            "name": "Transport",
            "AccountId": 1,
            "account": "Income",
            "id": 1,
            "updatedAt": "2018-07-28T20:13:12.000Z",
            "createdAt": "2018-07-28T20:13:12.000Z"
        }
    *
    *
    @apiError server No user found with the provided id.*@apiError server Something went wrong.*@apiError server Error
    while finding the user with the provided id

     */

    app.put('/category/:id', category.update);


};