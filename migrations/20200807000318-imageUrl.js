'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

      return Promise.all([
        queryInterface.addColumn(
        'Vehicles',
        'imageUrl',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Users',
        'imageUrl',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Maintenances',
        'imageUrl',
        {
          type: Sequelize.STRING
        }
      )
      ]);
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn('Vehicles', 'imageUrl'),
      queryInterface.removeColumn('Users', 'imageUrl'),
      queryInterface.removeColumn('Maintenances', 'imageUrl')
    ])
  }
};
