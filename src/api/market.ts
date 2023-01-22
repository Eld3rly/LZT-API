import { LZTAPICaller } from "../caller.js";

export class LZTApiMarket extends LZTAPICaller {
    constructor(token: string) {
        super(token);
    }

    public readonly MESSAGE_FROM_AUTHOR = "Right now I have no motivation to make an api to the marketplace. Well, I also do not have access to it, I will do it later.)"

    public async PRINT_MESSAGE() {
        console.log(this.MESSAGE_FROM_AUTHOR);
    }
}