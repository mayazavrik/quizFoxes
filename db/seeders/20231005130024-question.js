"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			"Questions",
			[
				{
					textQuestion: "вопрос1?",
					answerQuestion: "ответ1",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос2",
					answerQuestion: "ответ2",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос3",
					answerQuestion: "ответ3",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос4",
					answerQuestion: "ответ4",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос5",
					answerQuestion: "ответ5",
					idTheme: 1,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос2-1",
					answerQuestion: "ответ2-1",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос2-2",
					answerQuestion: "ответ2-2",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос2-3",
					answerQuestion: "ответ2-3",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос2-4",
					answerQuestion: "ответ2-4",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					textQuestion: "вопрос2-5",
					answerQuestion: "ответ2-5",
					idTheme: 2,
					questionPrice: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete("Questions", null, {});
	},
};
