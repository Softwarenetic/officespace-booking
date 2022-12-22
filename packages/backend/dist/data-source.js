"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Workplace_1 = require("./entity/Workplace");
const Office_1 = require("./entity/Office");
const Reservation_1 = require("./entity/Reservation");
const CreateUser_1 = require("./migration/CreateUser");
const CreateOffice_1 = require("./migration/CreateOffice");
const CreateReservation_1 = require("./migration/CreateReservation");
const CreateWorkplace_1 = require("./migration/CreateWorkplace");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [User_1.default, Workplace_1.default, Office_1.default, Reservation_1.default],
    subscribers: [],
    migrations: [CreateUser_1.CreateUser, CreateOffice_1.CreateOffice, CreateReservation_1.CreateReservation, CreateWorkplace_1.CreateWorkplace],
});
//# sourceMappingURL=data-source.js.map