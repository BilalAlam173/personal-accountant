var method = require('../app/controllers/method');

exports.init = function (app) {
    /**
     * @api {post} /method Create new method
     * @apiName Create
     * @apiGroup Method
     *
     *
     * @apiSuccess {String} name user's fullname.
     * @apiSuccess {Boolean} positive True means positive i.e an increase in this method will cause increase in cash and vise versa.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *    "name": "Income",
          "positive": true,
          "id": 1,
          "updatedAt": "2018-07-28T17:11:22.000Z",
          "createdAt": "2018-07-28T17:11:22.000Z"
         }
     *
     * @apiError Unknown Something went wrong.
     
     */
    app.post('/method', method.create);

    /**
     * @api {post} /method get all accounts
     * @apiName Get all
     * @apiGroup Method
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   [{
     *    "name": "Income",
          "positive": true,
          "id": 1,
          "updatedAt": "2018-07-28T17:11:22.000Z",
          "createdAt": "2018-07-28T17:11:22.000Z"
         }]
     *
     * @apiError Unknown Something went wrong.
     
     */
    app.get('/method', method.all);

    /**
     * @api {delete} /method delete an method
     * @apiName Delete
     * @apiGroup Method
     *
     *  * @apiSuccess {String} name user's fullname.
     *  * @apiSuccess {Boolean} positive True means positive i.e an increase in this method will cause increase in cash and vise versa.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *    "name": "Income",
          "positive": true,
          "id": 1,
          "updatedAt": "2018-07-28T17:11:22.000Z",
          "createdAt": "2018-07-28T17:11:22.000Z"
         }
     *
     * @apiError server No user found with the provided id.
     * @apiError server Something went wrong.
     * @apiError server Error while finding the user with the provided id
     
     */
     app.delete('/method', method.destroy);

     /**
     * @api {put} /method update an method
     * @apiName Delete
     * @apiGroup Method
     *
     * @apiParam {id} id Users unique ID.

     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *    "name": "Income",
          "positive": true,
          "id": 1,
          "updatedAt": "2018-07-28T17:11:22.000Z",
          "createdAt": "2018-07-28T17:11:22.000Z"
         }
     *
     * @apiError server No user found with the provided id.
     * @apiError server Something went wrong.
     * @apiError server Error while finding the user with the provided id
    
     */

     app.put('/method/:id', method.update);


};