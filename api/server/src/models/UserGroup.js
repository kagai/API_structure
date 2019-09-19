module.exports = (sequelize, DataTypes) => {
    const UserGroup = sequelize.define('tblusergroups', {
        group_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING
        }
    });
    return UserGroup;
};