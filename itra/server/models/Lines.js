module.exports = (sequelize, DataTypes) => {

    const Lines = sequelize.define("Lines", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        registrationDate: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Lines;
}