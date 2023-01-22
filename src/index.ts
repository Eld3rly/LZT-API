import { LZTApiMarket } from "./api/market.js";
import { LZTApiUsers } from "./api/users.js";

export default class LZTAPI {
    public Users: LZTApiUsers;
    public Market: LZTApiMarket;

    constructor(token: string) {
        this.Users = new LZTApiUsers(token);
        this.Market = new LZTApiMarket(token);
    }
}