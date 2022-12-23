import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    hello(token: any): Promise<any>;
    login(token: any): Promise<any>;
}
