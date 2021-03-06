"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Budgets",
      [
        {
          name: "Transportation and accomodation budget",
          amount: 15000000,
          initial_amount: 20000000,
          date: new Date("1 September 2021"),
          due_date: new Date("1 October 2021"),
          status: "Approved",
          DepartmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tax budget",
          amount: 12000000,
          initial_amount: 30000000,
          date: new Date("1 June 2021"),
          due_date: new Date("1 August 2021"),
          status: "Approved",
          DepartmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gas and toll road budget",
          amount: 3500000,
          initial_amount: 7500000,
          date: new Date("15 April 2021"),
          due_date: new Date("15 July 2021"),
          status: "Approved",
          DepartmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Office Stationery Equipments Budget",
          amount: 10000000,
          initial_amount: 10000000,
          date: new Date("1 January 2021"),
          due_date: new Date("1 March 2021"),
          status: "Unapproved",
          DepartmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Health & Fitness Budget",
          amount: 30000000,
          initial_amount: 30000000,
          date: new Date("15 April 2021"),
          due_date: new Date("15 June 2021"),
          status: "Rejected",
          DepartmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marketing Budget",
          amount: 37500000,
          initial_amount: 50000000,
          date: new Date("25 August 2021"),
          due_date: new Date("25 October 2021"),
          status: "Approved",
          DepartmentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sales Team Budget",
          amount: 10500000,
          initial_amount: 18000000,
          date: new Date("10 September 2021"),
          due_date: new Date("10 November 2021"),
          status: "Approved",
          DepartmentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Events Budget",
          amount: 20000000,
          initial_amount: 30000000,
          date: new Date("15 April 2021"),
          due_date: new Date("15 July 2021"),
          status: "Approved",
          DepartmentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Advertisement Budget",
          amount: 25000000,
          initial_amount: 25000000,
          date: new Date("1 October 2021"),
          due_date: new Date("1 December 2021"),
          status: "Unapproved",
          DepartmentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Recreation Budget",
          amount: 45000000,
          initial_amount: 45000000,
          date: new Date("20 November 2021"),
          due_date: new Date("20 December 2021"),
          status: "Rejected",
          DepartmentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Budgets", null, {});
  },
};
