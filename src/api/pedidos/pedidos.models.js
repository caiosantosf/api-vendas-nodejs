import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Pedido extends Model {}

  Pedido.init({
    descricao: dataTypes.STRING
  }, { sequelize, modelName: 'pedido', tableName: 'pedidos' });

  Pedido.associate = models => {
    //models.pedido.hasMany(models.produto);
    Pedido.belongsToMany( Produto, {
        as: [Relationship],
        through: [Pedido_Produto],
        foreignKey: 'PedidoId'
    })
  };

  return Pedido;
};