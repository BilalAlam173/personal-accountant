var account = require('../app/controllers/account');

exports.init = function (app) {
    /**
     * @api {post} /account Create new account
     * @apiName Create
     * @apiGroup Account
     *
     *
     * @apiSuccess {String} name user's fullname.
     * @apiSuccess {Boolean} positive True means positive i.e an increase in this account will cause increase in cash and vise versa.
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
    app.post('/account', account.create);

    /**
     * @api {post} /account get all accounts
     * @apiName Get all
     * @apiGroup Account
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
    app.get('/account', account.all);

    /**
     * @api {delete} /account delete an account
     * @apiName Delete
     * @apiGroup Account
     *
     *  * @apiSuccess {String} name user's fullname.
     *  * @apiSuccess {Boolean} positive True means positive i.e an increase in this account will cause increase in cash and vise versa.
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
     app.delete('/account', account.destroy);

     /**
     * @api {put} /account update an account
     * @apiName Delete
     * @apiGroup Account
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

     app.put('/account/:id', account.update);


};