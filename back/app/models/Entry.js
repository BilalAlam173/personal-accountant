

module.exports = function(sequelize, DataTypes) {

	var Entry = sequelize.define('Entry', {
		    title:DataTypes.STRING,
			amount: DataTypes.INTEGER,
			type:DataTypes.STRING,
			category:DataTypes.STRING,
			account:DataTypes.STRING,
			method:DataTypes.STRING

		},
		{
			associate: function(models){
				Entry.belongsTo(models.User);
				Entry.belongsTo(models.Account);
				Entry.belongsTo(models.Category);
				Entry.belongsTo(models.Method);
			}
		}
	);

	return Entry;
};
