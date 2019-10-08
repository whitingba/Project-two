module.exports = function (sequelize, DataTypes) {
    const DefinedTask = sequelize.define('DefinedTask', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 155]
            }
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        //*****future enhancement here*****
        // location: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1, 20]
        //     }
        // },
        // season: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1, 20]
        //     }
        // }
    });

    // DefinedTask.associate = function (models) {
    //     DefinedTask.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return DefinedTask;
};