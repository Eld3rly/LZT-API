import { LZTAPICaller } from "../caller.js";
import { 
    LZTApiUserResponse,
    LZTApiFindUserResponse,
    LZTApiNotificationsResponse,
    LZTApiStandardResponse,
    LZTApiConversationsResponse,
    LZTApiConversationMessagesResponse,
    LZTApiConversationMessageSentResponse,
    LZTApiGetUserFollowResponse
} from "../type.js";

export class LZTApiUsers extends LZTAPICaller {
    constructor(token: string) {
        super(token);
    }

    /*
    TYPES FOR ALL RESPONSES ARE IN DEVELOPMENT
    */

    public async GetUsers(page:number, limit:number): Promise<any> {
        return await this.call("GET", `/users/`, {page, limit});
    }

    public async GetUser(id: string|number = "me"): Promise<LZTApiUserResponse> {
        return await this.call("GET", `/users/${id}/`);
    }

    public async FindUser(username: string): Promise<LZTApiFindUserResponse> {
        return await this.call("GET", `/users/find/?username=${username}`);
    }
    public async FindUserByTelegram(username: string): Promise<LZTApiFindUserResponse> {
        return await this.call("GET", `/users/find/?custom_fields[telegram]=${username}`);
    }
    

    public async GetNotifications(page: number = 1): Promise<LZTApiNotificationsResponse> {
        return await this.call("GET", `/notifications/?page=${page}`);
    }

    public async ReadNotification(notification_id?: number): Promise<LZTApiStandardResponse> {
        return await this.call("POST", `/notifications/read/${notification_id ? `?notification_id=${notification_id}` : ""}`);
    }


    public async GetConversations(): Promise<LZTApiConversationsResponse> {
        return await this.call("GET", `/conversations/`);
    }

    public async GetConversationMessages(conversation_id: number): Promise<LZTApiConversationMessagesResponse> {
        return await this.call("GET", `/conversation-messages/?conversation_id=${conversation_id}`);
    }

    public async SendConversationMessage(conversation_id: number, message_body: string): Promise<LZTApiConversationMessageSentResponse> {
        return await this.call("POST", `/conversation-messages/?conversation_id=${conversation_id}&message_body=${message_body}`);
    }

    public async EditConversationMessage(message_id: number, message_body: string): Promise<LZTApiConversationMessageSentResponse> {
        return await this.call("PUT", `/conversation-messages/${message_id}/?message_body=${message_body}`);
    }

    public async SetAvatar(avatar: Buffer): Promise<LZTApiStandardResponse> {
        return await this.call("POST", `/users/me/avatar/`, {avatar});
    }

    public async DeleteAvatar(): Promise<LZTApiStandardResponse> {
        return await this.call("DELETE", `/users/me/avatar/`);
    }

    public async FollowUser(username: string|number): Promise<LZTApiStandardResponse> {
        return await this.call("POST", `/users/${username}/followers/`);
    }

    public async UnfollowUser(username: string|number): Promise<LZTApiStandardResponse> {
        return await this.call("DELETE", `/users/${username}/followers/`);
    }

    public async GetFollowers(username: string|number): Promise<LZTApiGetUserFollowResponse> {
        return await this.call("GET", `/users/${username}/followers/`);
    }
    public async GetFollowing(username: string|number): Promise<LZTApiGetUserFollowResponse> {
        return await this.call("GET", `/users/${username}/followings/`);
    }

    public async IgnoreUser(username: string|number): Promise<LZTApiStandardResponse> {
        return await this.call("POST", `/users/${username}/ignore/`);
    }

    public async UnignoreUser(username: string|number): Promise<LZTApiStandardResponse> {
        return await this.call("DELETE", `/users/${username}/ignore/`);
    }
    


}