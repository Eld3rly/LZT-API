import { LZTAPICaller } from "../caller.js";
export class LZTApiUsers extends LZTAPICaller {
    constructor(token) {
        super(token);
    }
    async GetUsers(page, limit) {
        return await this.call("GET", `/users/`, { page, limit });
    }
    async GetUser(id = "me") {
        return await this.call("GET", `/users/${id}/`);
    }
    async FindUser(username) {
        return await this.call("GET", `/users/find/?username=${username}`);
    }
    async FindUserByTelegram(username) {
        return await this.call("GET", `/users/find/?custom_fields[telegram]=${username}`);
    }
    async GetNotifications(page = 1) {
        return await this.call("GET", `/notifications/?page=${page}`);
    }
    async ReadNotification(notification_id) {
        return await this.call("POST", `/notifications/read/${notification_id ? `?notification_id=${notification_id}` : ""}`);
    }
    async GetConversations() {
        return await this.call("GET", `/conversations/`);
    }
    async GetConversationMessages(conversation_id) {
        return await this.call("GET", `/conversation-messages/?conversation_id=${conversation_id}`);
    }
    async SendConversationMessage(conversation_id, message_body) {
        return await this.call("POST", `/conversation-messages/?conversation_id=${conversation_id}&message_body=${message_body}`);
    }
    async EditConversationMessage(message_id, message_body) {
        return await this.call("PUT", `/conversation-messages/${message_id}/?message_body=${message_body}`);
    }
    async SetAvatar(avatar) {
        return await this.call("POST", `/users/me/avatar/`, { avatar });
    }
    async DeleteAvatar() {
        return await this.call("DELETE", `/users/me/avatar/`);
    }
    async FollowUser(username) {
        return await this.call("POST", `/users/${username}/followers/`);
    }
    async UnfollowUser(username) {
        return await this.call("DELETE", `/users/${username}/followers/`);
    }
    async GetFollowers(username) {
        return await this.call("GET", `/users/${username}/followers/`);
    }
    async GetFollowing(username) {
        return await this.call("GET", `/users/${username}/followings/`);
    }
    async IgnoreUser(username) {
        return await this.call("POST", `/users/${username}/ignore/`);
    }
    async UnignoreUser(username) {
        return await this.call("DELETE", `/users/${username}/ignore/`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFZNUMsTUFBTSxPQUFPLFdBQVksU0FBUSxZQUFZO0lBQ3pDLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQU1NLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBVyxFQUFFLEtBQVk7UUFDM0MsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQW9CLElBQUk7UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFnQjtRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUseUJBQXlCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNNLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFnQjtRQUM1QyxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsd0NBQXdDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUdNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlLENBQUM7UUFDMUMsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBd0I7UUFDbEQsT0FBTyxNQUFNLElB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