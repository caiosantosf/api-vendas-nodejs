import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Categoria extends Model {}

  Categoria.init({
    name: dataTypes.STRING
  }, { sequelize, modelName: 'categoria', tableName: 'categorias' });

  Categoria.associate = models => {
    models.categoria.belongsTo(models.produto);
  };

  return Categoria;
};
