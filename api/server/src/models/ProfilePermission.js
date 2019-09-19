module.exports = (sequelize, DataTypes) => {
    const ProfilePermission = sequelize.define('tblprofilepermission', {
        per_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        profile_id: {
            type: DataTypes.INTEGER
        },

        name: {
            type: DataTypes.STRING
        }
    });
    return ProfilePermission;
};