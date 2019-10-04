import database from '../src/models';

class UserService {
  static async getAllUsers() {
    try {
      return await database.sysuser.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getOneUser(params) {
    try {
      return await database.sysuser.findOne({
        where: {
          username: params,
          limit: 1
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async createUser(user) {
    try {
      return await database.sysuser.create(user);
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.sysuser.findOne({
        where: {
          user_id: Number(id)
        }
      });
      if (userToDelete) {
        const deletedUser = await database.sysuser.destroy({
          where: {
            user_id: Number(id)
          }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id) {
    try {
      const userToDelete = await database.sysuser.findOne({
        where: {
          user_id: Number(id)
        }
      });
      if (userToDelete) {
        const deletedUser = await database.sysuser.destroy({
          where: {
            user_id: Number(id)
          }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

}

export default UserService;
