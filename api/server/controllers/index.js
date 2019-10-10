import AuthController from './AuthController';
import ProfileController from './ProfileController';
import ProfilePermissionController from './ProfilePermissionController';
import UserController from './UserController';
import UserGroupController from './UserGroupController';
import _ from 'lodash';


const Controller = (app) => {
    const controller ={};
    _.extend(controller,new AuthController(app))
    _.extend(controller,new ProfileController(app))
    _.extend(controller,new  ProfilePermissionController(app))
    _.extend(controller,new  UserController(app))
  //   _.extend(controller,new UserGroupController(app))
     return controller;
}


export default Controller;
