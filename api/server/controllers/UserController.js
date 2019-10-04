import bcrypt from 'bcrypt';
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
   const {username} = req.params;
    try {
      const user = await UserService.getOneUser(username);
      if (user.length > 0) {
        util.setSuccess(200, 'User retrieved', user);
      } else {
        util.setSuccess(200, 'No users found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async createUser(req, res) {
    if (!req.body.userfullname || !req.body.username || !req.body.userpass) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const {userfullname,username,useremail,userphone,status_id,userpass,prof_id,user_lang} = req.body ;
		var user = {
			userfullname: userfullname,
			username: username,
			useremail: useremail,
			userphone: userphone,
			status_id: status_id,
			userpass: bcrypt.hashSync(userpass, 10),
			prof_id:  prof_id,
			user_lang: user_lang
		};
    try {
      const createdUser = await UserService.createUser(user);
      util.setSuccess(201, 'User Added!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }


  static async updateUser(req, res) {
    try {
      const updatedUser = await UserService.uodateUser(id);

    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { user_id } = req.body;
    if (!Number(user_id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }
    try {
      const userToDelete = await UserService.deleteUser(user_id);

      if (userToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User with the id ${user_id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

}

export default UserController;
