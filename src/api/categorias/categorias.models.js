import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Categoria extends Model {}

  Categoria.init({
    descricao: dataTypes.STRING
  }, { sequelize, modelName: 'categoria', tableName: 'categorias' });

  Categoria.associate = models => {
    models.categoria.hasMany(models.produto);
  };

  return Categoria;
};
