module.exports = function (sequelize, DataTypes) {
    const CustomTask = sequelize.define('CustomTask', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        }
    });

    CustomTask.associate = function (models) {
        CustomTask.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return User;
};