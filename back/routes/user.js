var users = require('../app/controllers/users');

exports.init = function (app) {
    /**
     * @api {post} /user Signup
     * @apiName Signup
     * @apiGroup Authentication
     *
     *
     * @apiSuccess {String} name user's fullname.
     * @apiSuccess {String} email email address.
     * @apiSuccess {String} username username.
     * @apiSuccess {String} password password.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *    "id": 1,
     *    "provider": "local",
     *    "salt": "v+sYyLWepiodXSiM/n2x4A==",
     *    "hashedPassword": "egv3PWg4Ow6ohxJghpGlp+HbtjWi3P8iDS5XgGM/DapFkmKxanLPI0usrD/oJd/Os0vgdbGp0WfIO/d6TlP5rw==",
     *    "updatedAt": "2018-07-28T15:20:06.000Z",
     *    "createdAt": "2018-07-28T15:20:06.000Z"
         }
     *
     * @apiError Unknown The id of the User was not found.
     
     */
    app.post('/user', users.create);

    /**
     * @api {post} /login login
     * @apiName Login
     * @apiGroup Authentication
     *
     *
     * @apiSuccess {string} email email address.
     * @apiSuccess {string} password password in plain text.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
    "id": 1,
    "name": "test",
    "email": "test@test.com",
    "username": "test",
    "hashedPassword": "Jw6dGVHE/yarnU0YYQTSyAAgXuBzW3whCS7rIUskGKnCGAzjTV3FfwuEU1qefkxhXy7BZPRNXM6uc4546fYN9w==",
    "provider": "local",
    "salt": "f7yHXJJJY9MwkdUPpGZwFA==",
    "openId": null,
    "createdAt": "2018-07-28T16:49:30.000Z",
    "updatedAt": "2018-07-28T16:49:30.000Z"
}
     *
     * @apiError Unknown The id of the User was not found.
     
     */
    app.post('/login', users.user);

};