var entry = require('../app/controllers/entry');

exports.init = function (app) {
    /**
     * @api {post} /entry Create new entry
     * @apiName Create
     * @apiGroup Entry
     *
     *
     * @apiSuccess {String} title entry title or descrition.
     * @apiSuccess {Number} amount total amount
     * @apiSuccess {FK} AccountId Acount's reference
     * @apiSuccess {FK} CategoryId Category's reference
     * @apiSuccess {FK} MethodId Method's reference
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
         {
            "title": "Transport",
            "amount": 100,
            "AccountId": 1,
            "CategoryId": 1,
            "MethodId": 1,
            "account": "Income",
            "method": "Income",
            "category": "Income",
            "id": 1,
            "updatedAt": "2018-07-28T19:53:40.000Z",
            "createdAt": "2018-07-28T19:53:40.000Z"
         }
    *
    *
    @apiError Unknown Something went wrong.

        */
    app.post('/entry', entry.create);

    /**
     * @api {post} /entry get all accounts
     * @apiName Get all
     * @apiGroup Entry
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      [{
            "title": "Transport",
            "amount": 100,
            "AccountId": 1,
            "CategoryId": 1,
            "MethodId": 1,
            "account": "Income",
            "method": "Income",
            "category": "Income",
            "id": 1,
            "updatedAt": "2018-07-28T19:53:40.000Z",
            "createdAt": "2018-07-28T19:53:40.000Z"
         }]
     *
     * @apiError Unknown Something went wrong.
     
     */
    app.get('/entry', entry.all);

    /**
     * @api {delete} /entry delete an entry
     * @apiName Delete
     * @apiGroup Entry
     *
     *  * @apiSuccess {PK} id user's unique id.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      {
            "title": "Transport",
            "amount": 100,
            "AccountId": 1,
            "CategoryId": 1,
            "MethodId": 1,
            "account": "Income",
            "method": "Income",
            "category": "Income",
            "id": 1,
            "updatedAt": "2018-07-28T19:53:40.000Z",
            "createdAt": "2018-07-28T19:53:40.000Z"
         }
     *
     * @apiError server No user found with the provided id.
     * @apiError server Something went wrong.
     * @apiError server Error while finding the user with the provided id
     
     */
    app.delete('/entry', entry.destroy);

    /**
     * @api {put} /entry update an entry
     * @apiName Delete
     * @apiGroup Entry
     *
     * @apiParam {PK} id Users unique ID.
     * 
     * @apiSuccess {String} title entry title or descrition.
     * @apiSuccess {Number} amount total amount
     * @apiSuccess {FK} AccountId Acount's reference
     * @apiSuccess {FK} CategoryId Category's reference
     * @apiSuccess {FK} MethodId Method's reference

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

    app.put('/entry/:id', entry.update);


};