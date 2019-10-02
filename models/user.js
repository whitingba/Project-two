module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 15]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlphanumeric: true,
            validate: {
                len: [5, 20]
            }
        }

    })

    User.associate = function (models) {
        //User will have many tasks
        User.hasMany(models.Task); //foreign id of UserId will be added to the Task table
    };

    return User;
};