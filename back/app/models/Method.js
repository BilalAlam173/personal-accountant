

module.exports = function(sequelize, DataTypes) {

	var Method = sequelize.define('Method', {
			name: DataTypes.STRING,
			type: DataTypes.STRING, // cash/cheque/account

		}
	);

	return Method;
};
