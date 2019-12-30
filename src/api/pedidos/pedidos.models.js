import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Pedido extends Model {}

  const PedidoProduto = sequelize.define('pedidos_produtos', {
    quantidade: dataTypes.INTEGER
  })

  Pedido.init({
    descricao: dataTypes.STRING
  }, { sequelize, modelName: 'pedido', tableName: 'pedidos' });

  Pedido.associate = models => {
    models.pedido.belongsToMany(models.produto, { through: PedidoProduto })
  };

  return Pedido;
};