import { DataTypes } from 'sequelize';
import Permission from '../types/permission-class.js';
import sequelize from '../config/index.js';
import Role from './role.js';

Permission.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Permission',
  },
);

Permission.belongsToMany(Role, { through: 'RolePermission' });

export default Permission;
