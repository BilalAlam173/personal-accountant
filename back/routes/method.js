var method = require('../app/controllers/method');

exports.init = function (app) {
    /**
     * @api {post} /method Create new method
     * @apiName Create
     * @apiGroup Method
     *
     *
     * @apiSuccess {String} name method title/name.
     * @apiSuccess {String} type cash/account etc.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
        {
            "name": "Transport",
            "type": "Cash"
        }
    *
    *
    @apiError Unknown Something went wrong.
    */
    app.post('/method', method.create);

    /**
     * @api {post} /method get all accounts
     * @apiName Get all
     * @apiGroup Method
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
        {
            "name": "Transport",
            "type": "Cash"
        }
    *
    *
    @apiError Unknown Something went wrong.

    */
    app.get('/method', method.all);

    /**
     * @api {delete} /method delete an method
     * @apiName Delete
     * @apiGroup Method
     *
     *  * @apiSuccess {PK} id unique key.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   
     *
        {
            "name": "Transport",
            "type": "Cash"
        }
    *
    *
    *@apiError server No user found with the provided id.
    *@apiError server Something went wrong.*@apiError server Error
     while finding the user with the provided id

        */
    app.delete('/method', method.destroy);

    /**
     * @api {put} /method update an method
     * @apiName Delete
     * @apiGroup Method
     *
     * @apiParam {id} id Users unique ID.
     * 
     * @apiSuccess {String} name method title/name.
     * @apiSuccess {String} type cash/account etc.

     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *  {
            "name": "Transport",
            "type": "Cash"
        }
     *
     * @apiError server No user found with the provided id.
     * @apiError server Something went wrong.
     * @apiError server Error while finding the user with the provided id
    
     */

    app.put('/method/:id', method.update);


};