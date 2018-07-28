var category = require('../app/controllers/category');

exports.init = function (app) {
    /**
     * @api {post} /category Create new category
     * @apiName Create
     * @apiGroup Category
     *
     *
     * @apiSuccess {String} name user's fullname.
     * @apiSuccess {Boolean} positive True means positive i.e an increase in this category will cause increase in cash and vise versa.
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
    app.post('/category', category.create);

    /**
     * @api {post} /category get all accounts
     * @apiName Get all
     * @apiGroup Category
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
    app.get('/category', category.all);

    /**
     * @api {delete} /category delete an category
     * @apiName Delete
     * @apiGroup Category
     *
     *  * @apiSuccess {String} name user's fullname.
     *  * @apiSuccess {Boolean} positive True means positive i.e an increase in this category will cause increase in cash and vise versa.
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
     app.delete('/category', category.destroy);

     /**
     * @api {put} /category update an category
     * @apiName Delete
     * @apiGroup Category
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

     app.put('/category/:id', category.update);


};