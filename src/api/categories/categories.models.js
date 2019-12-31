import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Category extends Model {}

  Category.init({
    description: dataTypes.STRING
  }, { sequelize, modelName: 'category', tableName: 'categories' });

  Category.associate = models => {
    //models.category.hasMany(models.product);
  };

  return Category;
};