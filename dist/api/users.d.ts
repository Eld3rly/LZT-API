/// <reference types="node" />
import { LZTAPICaller } from "../caller.js";
import { LZTApiUserResponse, LZTApiFindUserResponse, LZTApiNotificationsResponse, LZTApiStandardResponse, LZTApiConversationsResponse, LZTApiConversationMessagesResponse, LZTApiConversationMessageSentResponse, LZTApiGetUserFollowResponse } from "../type.js";
export declare class LZTApiUsers extends LZTAPICaller {
    constructor(token: string);
    GetUsers(page: number, limit: number): Promise<any>;
    GetUser(id?: string | number): Promise<LZTApiUserResponse>;
    FindUser(username: string): Promise<LZTApiFindUserResponse>;
    FindUserByTelegram(username: string): Promise<LZTApiFindUserResponse>;
    GetNotifications(page?: number): Promise<LZTApiNotificationsResponse>;
    ReadNotification(notification_id?: number): Promise<LZTApiStandardResponse>;
    GetConversations(): Promise<LZTApiConversationsResponse>;
    GetConversationMessages(conversation_id: number): Promise<LZTApiConversationMessagesResponse>;
    SendConversationMessage(conversation_id: number, message_body: string): Promise<LZTApiConversationMessageSentResponse>;
    EditConversationMessage(message_id: number, message_body: string): Promise<LZTApiConversationMessageSentResponse>;
    SetAvatar(avatar: Buffer): Promise<LZTApiStandardResponse>;
    DeleteAvatar(): Promise<LZTApiStandardResponse>;
    FollowUser(username: string | number): Promise<LZTApiStandardResponse>;
    UnfollowUser(username: string | number): Promise<LZTApiStandardResponse>;
    GetFollowers(username: string | number): Promise<LZTApiGetUserFollowResponse>;
    GetFollowing(username: string | number): Promise<LZTApiGetUserFollowResponse>;
    IgnoreUser(username: string | number): Promise<LZTApiStandardResponse>;
    UnignoreUser(username: string | number): Promise<LZTApiStandardResponse>;
}
