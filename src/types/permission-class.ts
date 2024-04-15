import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

class PermissionModel extends Model<
  InferAttributes<PermissionModel>,
  InferCreationAttributes<PermissionModel>
> {
  declare id: number;
  declare action: string;
}

export default PermissionModel;
