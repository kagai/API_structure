import UserService from '../services/UserService';
import Util from '../utils/Utils';

const util = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No users found');
      }
      return util.send(res);
    } catch (error) {  
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getOneUser(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No users found');
      }
      return util.send(res);
    } catch (error) {  
      util.setError(400, error);
      return util.send(res);
    }
  }



  static async updateUser(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No users found');
      }
      return util.send(res);
    } catch (error) {  
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No users found');
      }
      return util.send(res);
    } catch (error) {  
      util.setError(400, error);
      return util.send(res);
    }
  }
  
}

export default UserController;