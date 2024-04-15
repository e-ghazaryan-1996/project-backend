import { DataTypes } from 'sequelize';
import RolePermission from '../types/role-permission-class.js';
import sequelize from '../config/index.js';

RolePermission.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'RolePermission',
  },
);
