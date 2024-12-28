module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING
      },
      publishedYear: {
        type: Sequelize.INTEGER
      }
    });
    return Book;
  };