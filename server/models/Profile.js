const Profile = (sequelize, DataTypes) =>
  sequelize.define(
    "Profile",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: "profile", timestamps: true }
  );

module.exports = Profile;
