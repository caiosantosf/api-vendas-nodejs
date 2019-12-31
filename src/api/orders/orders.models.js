import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Order extends Model {}

  const OrderProduct = sequelize.define('order_products', {
    amount: dataTypes.INTEGER
  })

  Order.init({
    total: dataTypes.DECIMAL
  }, { sequelize, modelName: 'order', tableName: 'orders' });

  Order.associate = models => {
    models.order.belongsTo(models.user);
    models.order.belongsToMany(models.product, { through: OrderProduct })
  };

  return Order;
};