import { Model } from 'sequelize';

export default (sequelize, dataTypes) => {
  class Post extends Model {}

  Post.init({
    title: dataTypes.STRING,
    content: dataTypes.TEXT
  }, { sequelize, modelName: 'post', tableName: 'posts' });

  Post.associate = models => {
    models.post.belongsTo(models.user);
    models.post.hasMany(models.tag, { as: 'tags' });
  };

  return Post;
};
