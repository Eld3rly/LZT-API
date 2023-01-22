export declare class LZTAPICaller {
    private Token;
    private ApiUrl;
    constructor(Token: string, ApiUrl?: string);
    protected call(method: string, path: string, body?: {
        [key: string]: any;
    } | null): Promise<any>;
}
