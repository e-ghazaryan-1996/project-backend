import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
} from 'sequelize';

class RolePermissionModel extends Model<
  InferAttributes<RolePermissionModel>,
  InferCreationAttributes<RolePermissionModel>
> {
  declare id: number;
  declare roleId: ForeignKey<number>;
  declare permissionId: ForeignKey<number>;
}

export default RolePermissionModel;
