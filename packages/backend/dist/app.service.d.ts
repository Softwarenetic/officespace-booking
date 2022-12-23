export declare class AppService {
    getHello(): string;
    login({ email, name, image, }: {
        email: string;
        name: string;
        image: string;
    }): Promise<any>;
}
