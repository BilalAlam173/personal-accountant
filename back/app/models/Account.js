module.exports = function (sequelize, DataTypes) {

    var Account = sequelize.define('Account', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        isPositive: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Account;
};