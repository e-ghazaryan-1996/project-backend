import { DataTypes } from 'sequelize';
import Role from '../types/role-class.js';
import sequelize from '../config/index.js';
import Permission from './permission.js';

Role.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: DataTypes.ENUM,
      values: ['ADMIN', 'AUTHOR', 'USER'],
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Role',
  },
);

Role.belongsToMany(Permission, { through: 'RolePermission' });

export default Role;
