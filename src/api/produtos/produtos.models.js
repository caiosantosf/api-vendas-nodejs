import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Produto extends Model {}

  Produto.init({
    descricao: dataTypes.STRING,
    quantidade: dataTypes.INTEGER,
    valor: dataTypes.DECIMAL,
  }, { sequelize, modelName: 'produto', tableName: 'produtos' });

  Produto.associate = models => {
    //models.produto.belongsTo(models.user);
    models.produto.belongsTo(models.categoria, { as: 'categoria' });
    Produto.belongsToMany(Pedido, {
      as: [Relationship2],
      through: [Pedido_Produto],
      foreignKey: 'ProdutoId'
    });
  };

  return Produto;
};
