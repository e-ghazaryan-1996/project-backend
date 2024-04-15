import { DataTypes } from 'sequelize';
import sequelize from '../config/index.js';
import User from '../types/user-class.js';
import Role from './role.js';

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    roleId: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 60],
      },
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 60],
      },
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    passwordHash: {
      type: DataTypes.STRING(60),
    }
  },
  {
    sequelize,
    modelName: 'User',
  },
);

User.belongsTo(Role, { foreignKey: 'roleId' });

export default User;
