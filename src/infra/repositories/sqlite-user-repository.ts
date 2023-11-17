import { CreateUserDTO, User, UserRepository } from 'src/domain';
import { Sequelize, DataTypes, Model } from 'sequelize';

class UserModel extends Model {}

export class SqliteUserRepository implements UserRepository {
  private db: Sequelize;

  constructor(dbName: string, dbUserName: string, sqlitePassword: string) {
    this.db = new Sequelize(dbName, dbUserName, sqlitePassword, {
      dialect: 'sqlite',
      host: `${dbName}.sqlite`,
    });
    this.db.sync();

    UserModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: this.db,
        modelName: 'User',
        timestamps: true,
      },
    );
  }

  async create(data: CreateUserDTO): Promise<User> {
    const userModel = this.db.model('User');
    const user = await userModel.create({ ...data });

    return new User({ ...user.toJSON() });
  }
}
