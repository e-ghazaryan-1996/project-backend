import { Model, InferAttributes, InferCreationAttributes,ForeignKey } from 'sequelize';

class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: number;
  declare roleId: ForeignKey<number>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare emailVerified: boolean;
  declare passwordHash: string;
}

export default UserModel
