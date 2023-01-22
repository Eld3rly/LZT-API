import fetch from "node-fetch";
import FormData from "form-data";
export class LZTAPICaller {
    Token;
    ApiUrl;
    constructor(Token, ApiUrl) {
        this.Token = Token;
        this.ApiUrl = ApiUrl || "https://api.lolz.guru";
    }
    async call(method, path, body = null) {
        const url = this.ApiUrl + path;
        const headers = {
            "Authorization": `Bearer ${this.Token}`
        };
        const options = {
            method: method,
            headers: headers,
            body: null
        };
        if (body) {
            const Formdata = new FormData();
            for (const key in body) {
                if (body.hasOwnProperty(key)) {
                    const value = body[key];
                    Formdata.append(key, value);
                }
            }
            options.body = Formdata;
        }
        const response = await fetch(url, options);
        if (response.headers.get("content-type")?.startsWith("application/json")) {
            const json = await response.json();
            if (json.error)
                throw new Error(json.error_description || json.error);
            if (json.errors)
                throw new Error(json.errors);
            return json;
        }
        else {
            if (response.status == 429) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                return await this.call(method, path, body);
            }
            throw new Error(`Invalid content type | Server returned ${response.status}`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NhbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBRWpDLE1BQU0sT0FBTyxZQUFZO0lBRWIsS0FBSyxDQUFTO0lBQ2QsTUFBTSxDQUFTO0lBRXZCLFlBQVksS0FBYSxFQUFFLE1BQWU7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksdUJBQXVCLENBQUM7SUFDcEQsQ0FBQztJQUVTLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBYyxFQUFFLElBQVksRUFBRSxPQUFxQyxJQUFJO1FBQ3hGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRS9CLE1BQU0sT0FBTyxHQUFHO1lBQ1osZUFBZSxFQUFFLFVBQVUsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUNmLENBQUM7UUFDN0IsTUFBTSxPQUFPLEdBQUc7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ04sQ0FBQztRQUNULElBQUksSUFBSSxFQUFFO1lBQ04sTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNoQyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1lBQ0QsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDM0I7UUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNyRSxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQTJCLENBQUM7WUFDNUQsSUFBRyxJQUFJLENBQUMsS0FBSztnQkFDVCxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsSUFBRyxJQUFJLENBQUMsTUFBTTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0k7WUFDRCxJQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFDO2dCQUN0QixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlDO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDaEY7SUFDTCxDQUFDO0NBQ0oifQ==