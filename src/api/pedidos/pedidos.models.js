import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Pedido extends Model {}

  const PedidoProduto = sequelize.define('pedidos_produtos', {
    quantidade: dataTypes.INTEGER
  })

  Pedido.init({
    valorTotal: dataTypes.DECIMAL
  }, { sequelize, modelName: 'pedido', tableName: 'pedidos' });

  Pedido.associate = models => {
    models.pedido.belongsTo(models.user);
    models.pedido.belongsToMany(models.produto, { through: PedidoProduto })
  };

  return Pedido;
};