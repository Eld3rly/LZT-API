import { LZTApiMarket } from "./api/market.js";
import { LZTApiUsers } from "./api/users.js";
export default class LZTAPI {
    Users: LZTApiUsers;
    Market: LZTApiMarket;
    constructor(token: string);
}
