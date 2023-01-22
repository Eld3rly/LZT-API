import fetch from "node-fetch";
import FormData from "form-data";

export class LZTAPICaller {

    private Token: string;
    private ApiUrl: string;

    constructor(Token: string, ApiUrl?: string) {
        this.Token = Token;
        this.ApiUrl = ApiUrl || "https://api.lolz.guru";
    }

    protected async call(method: string, path: string, body: {[key: string]: any;} | null = null): Promise<any> {
        const url = this.ApiUrl + path;

        const headers = {
            "Authorization": `Bearer ${this.Token}`
        } as {[key: string]: string};
        const options = {
            method: method,
            headers: headers,
            body: null
        } as any;
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

        if(response.headers.get("content-type")?.startsWith("application/json")) {
            const json = await response.json() as {[key: string]: any;};
            if(json.error) 
                throw new Error(json.error_description || json.error);
            if(json.errors)
                throw new Error(json.errors);
            return json;
        }
        else {
            if(response.status == 429){
                await new Promise(resolve => setTimeout(resolve, 1000));
                return await this.call(method, path, body);
            }
            throw new Error(`Invalid content type | Server returned ${response.status}`);
        }
    }
}