import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Produto extends Model {}

  const PedidoProduto = sequelize.define('pedidos_produtos', {
    quantidade: dataTypes.INTEGER
  })

  Produto.init({
    descricao: dataTypes.STRING,
    quantidade: dataTypes.INTEGER,
    valor: dataTypes.DECIMAL
  }, { sequelize, modelName: 'produto', tableName: 'produtos' });

  Produto.associate = models => {
    models.produto.belongsTo(models.categoria, { as: 'categoria' });
    models.produto.belongsToMany(models.pedido, { through: PedidoProduto })
  }

  return Produto
}

//