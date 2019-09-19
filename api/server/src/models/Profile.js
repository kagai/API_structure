module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('tblprofile', {
        prof_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        space: {
            type: DataTypes.STRING,
            defaultValue: 'cci'
        },

        prof_name: {
            type: DataTypes.STRING
        },

        group_id: {
            type: DataTypes.INTEGER
        },

        status_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
    return Profile;
};