import { LZTAPICaller } from "../caller.js";
export declare class LZTApiMarket extends LZTAPICaller {
    constructor(token: string);
    readonly MESSAGE_FROM_AUTHOR = "Right now I have no motivation to make an api to the marketplace. Well, I also do not have access to it, I will do it later.)";
    PRINT_MESSAGE(): Promise<void>;
}
