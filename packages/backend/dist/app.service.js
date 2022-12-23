"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const User_1 = require("./entity/User");
const data_source_1 = require("./data-source");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    async login({ email, name, image, }) {
        const user = await data_source_1.AppDataSource.manager.findOneBy(User_1.User, { email: email });
        if (!user) {
            const newUser = new User_1.User();
            newUser.email = email;
            newUser.name = name;
            newUser.avatar = image;
            return newUser;
        }
        else {
            console.log(user);
            return user;
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map