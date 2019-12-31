import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Product extends Model {}

  const OrderProduct = sequelize.define('order_products', {
    quantidade: dataTypes.INTEGER
  })

  Product.init({
    description: dataTypes.STRING,
    amount: dataTypes.INTEGER,
    price: dataTypes.DECIMAL
  }, { sequelize, modelName: 'product', tableName: 'products' });

  Product.associate = models => {
    models.product.belongsTo(models.category, { as: 'category' });
    models.product.belongsToMany(models.order, { through: OrderProduct })
  }

  return Product
}
