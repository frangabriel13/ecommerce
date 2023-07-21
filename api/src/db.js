require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Product, Variation, Category } = sequelize.models;

User.belongsToMany(Product, { through: 'UserFavorites', as: 'favorites' });
Product.belongsToMany(User, { through: 'UserFavorites', as: 'users' });

Product.hasMany(Variation, { as: 'variations' });
Variation.belongsTo(Product);

Category.belongsTo(Category, { as: 'parentCategory', foreignKey: 'parentId' });
Category.hasMany(Category, { as: 'subcategories', foreignKey: 'parentId' });

Product.belongsToMany(Category, { through: 'category_product', as: 'categories', foreignKey: 'productId' });
Category.belongsToMany(Product, { through: 'category_product', as: 'products', foreignKey: 'categoryId' });


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};