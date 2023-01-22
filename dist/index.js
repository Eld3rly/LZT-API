import { LZTApiMarket } from "./api/market.js";
import { LZTApiUsers } from "./api/users.js";
export default class LZTAPI {
    Users;
    Market;
    constructor(token) {
        this.Users = new LZTApiUsers(token);
        this.Market = new LZTApiMarket(token);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxNQUFNLENBQUMsT0FBTyxPQUFPLE1BQU07SUFDaEIsS0FBSyxDQUFjO0lBQ25CLE1BQU0sQ0FBZTtJQUU1QixZQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDSiJ9