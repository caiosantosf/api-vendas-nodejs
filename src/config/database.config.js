import { Sequelize } from 'sequelize';
import Env from './environment.config';

const DATABASES = {
  /*test: {
    default: new Sequelize(Env.DB_NAME, {
      dialectOptions: {
        multipleStatements: true,
        decimalNumbers: true
      },
      sync: {
        force: true
      },
      logging: false,
      define: {
        freezeTableName: true,
        paranoid: true
      }
    })
  },*/
  development: {
    default: new Sequelize(Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
      host: Env.DB_HOST,
      port: Env.DB_PORT,
      dialect: 'mysql',
      sync: {
        force: true
      },
      logging: Env.DEBUG,
      define: {
        freezeTableName: true,
        paranoid: true
      }
    })
  },
  production: {
    default: new Sequelize(Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
      host: Env.DB_HOST,
      port: Env.DB_PORT,
      dialect: 'mysql',
      logging: Env.DEBUG,
      define: {
        freezeTableName: true,
        paranoid: true
      }
    })
  },
};

export default DATABASES[Env.ENV];

//
