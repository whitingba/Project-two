module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define('Task', {
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


        // location: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1, 20]
        //     }
        // },
        // season: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     validate: {
        //         len: [1, 20]
        //     }
        // }


    })

    Task.associate = function (models) {
        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };




    return Task;
};