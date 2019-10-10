import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import Sequelize  from 'sequelize'
import passport from 'passport';

import userRoutes from './server/routes/UserRoutes';
import Helpers from './helpers';





  config.config();

  const app = express();
  // move this to the config
  const version = 'v1';
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  
  const port = process.env.PORT || 8000;
  
  app.use(passport.initialize());
  app.use(passport.session()); 
  
  app.set("seq", Helpers.dbInstance());
  
  
   
  app.use(`/api/${version}/users`, userRoutes);
  
  // when a random route is inputed
  app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.',
  }));
  

  
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });


Helpers.passAppObjectToControllers(app);



export default app;