module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('sysuser', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    userfullname: {
      type: DataTypes.STRING
    },

    username: {
      type: DataTypes.STRING
    },

    userpass: {
      type: DataTypes.STRING
    },

    useremail: {
      type: DataTypes.STRING
    },

    userphone: {
      type: DataTypes.STRING
    },

    prof_id: {
      type: DataTypes.INTEGER
    }, //cci profile id

    login_tries: {
      type: DataTypes.INTEGER
    },

    last_password_changed: {
      type: DataTypes.DATE
    },

    user_lang: {
      type: DataTypes.STRING
    },

    emp_id: {
      type: DataTypes.INTEGER
    },

    user_pic: {
      type: DataTypes.STRING
    },

    prt_id: {
      type: DataTypes.INTEGER
    },

    adp_id: {
      type: DataTypes.INTEGER
    }, //adis profile id

    prft_id: {
      type: DataTypes.INTEGER
    },

    status_id: {
      type: DataTypes.INTEGER
    },

    is_agent: {
      type: DataTypes.BOOLEAN
    }
  });
  return User;
};