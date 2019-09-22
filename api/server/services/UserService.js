import database from '../src/models';

class UserService {
  static async getAllUsers() {
    try {
      return await database.sysuser.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getOneUser() {
    try {
      return await database.sysuser.findOne();
    } catch (error) {
      throw error;
    }
  }

}

export default UserService;