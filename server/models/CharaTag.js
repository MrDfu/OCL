module.exports = (sequelize, DataTypes) => {
  const CharaTag = sequelize.define('CharaTag', {
    TagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CharaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return CharaTag;
};
