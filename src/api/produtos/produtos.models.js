import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Produto extends Model {}

  Post.init({
    descricao: dataTypes.STRING,
    quantidade: dataTypes.INTEGER,
    valor: dataTypes.DECIMAL,
  }, { sequelize, modelName: 'produto', tableName: 'produtos' });

  Post.associate = models => {
    models.produto.belongsTo(models.user);
    models.produto.hasOne(models.categoria, { as: 'categoria' });
  };

  return Produto;
};
