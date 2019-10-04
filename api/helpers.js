import fs from 'fs';


import Sequelize  from 'sequelize';
import config from 'dotenv';



class Helpers {
 // TO be used when one wants to write raw queries in the app 
    static dbInstance(){
        let seq = new Sequelize('postgres://postgres:password@127.0.0.1:5432/mip', {
			timezone : "+02:00",
			dialect: 'postgres',
			sync: { force: true },
			syncOnAssociation: true,
			define: {
		        timestamps: false,
		    }
		});

		return seq;
     }
    static passAppObjectToControllers(){
       let file =  fs.readdirSync(__dirname + '/server/controllers')
        
    }

}

export default Helpers;