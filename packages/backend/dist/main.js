"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const data_source_1 = require("./data-source");
require("reflect-metadata");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((error) => console.error('Error during Data Source initialization: ', error));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map