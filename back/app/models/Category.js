

module.exports = function(sequelize, DataTypes) {

	var Category = sequelize.define('Category', {
			name: DataTypes.STRING,
			account:DataTypes.STRING

		},
		{
			associate: function(models){
				Category.belongsTo(models.Account);
			}
		}
	);

	return Category;
};
