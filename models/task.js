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
    });




    return Task;
};