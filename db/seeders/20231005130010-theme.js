"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			"Themes",
			[
				{
					name: "Theme1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: "Theme2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete("Themes", null, {});
	},
};
