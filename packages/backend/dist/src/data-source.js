"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Workplace_1 = require("./entity/Workplace");
const Office_1 = require("./entity/Office");
const Reservation_1 = require("./entity/Reservation");
const _1671628225940_CreateUser_1 = require("./migration/1671628225940-CreateUser");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'db.gijpomcaxxhzwrikfptm.supabase.co',
    port: 5432,
    username: 'postgres',
    password: '3xU4kB3wE3o5vp99',
    database: 'postgres',
    synchronize: false,
    logging: true,
    entities: [User_1.default, Workplace_1.default, Office_1.default, Reservation_1.default],
    subscribers: [],
    migrations: [_1671628225940_CreateUser_1.CreateUser1671628225940],
});
//# sourceMappingURL=data-source.js.map