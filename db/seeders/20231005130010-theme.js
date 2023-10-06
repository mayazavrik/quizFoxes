"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			"Themes",
			[
				{
					name: "Low-cost cosplay",
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: "Memes",
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
