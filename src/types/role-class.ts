import {
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

class RoleModel extends Model<
  InferAttributes<RoleModel>,
  InferCreationAttributes<RoleModel>
> {
  declare id: number;
  declare name: 'ADMIN' | 'AUTHOR' | 'USER';
}

export default RoleModel;
