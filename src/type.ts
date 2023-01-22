type LZTApiField = {
    id: string;
    title: string;
    description: string;
    display_group: string;
    choices?: {
        key: string;
        value: string;
    }[];
    is_multiple_choice?: boolean;
    is_required: boolean;
    value?: string;
    values?: {
        key: string;
        value: string;
    }[];
};
type LZTApiUser = {
    user_id: number;
    short_link: string;
    username: string;
    user_title: string;
    user_message_count?: number;
    user_register_date?: number;
    user_last_seen_date?: number;
    user_like_count?: number;
    user_is_visitor?: boolean;
    user_email?: string;
    user_dob_day?: number;
    user_dob_month?: number;
    user_dob_year?: number;
    user_timezone_offset?: number;
    user_has_password?: boolean;
    user_unread_conversation_count?: number;
    user_unread_notification_count?: number;
    user_followers_total?: number;
    user_followings_total?: number;
    user_is_admin?: boolean;
    user_is_moderator?: boolean;
    user_is_staff?: boolean;
    user_is_valid?: boolean;
    user_is_verified?: boolean;
    user_is_followed?: boolean;
    user_is_ignored?: boolean;
    fields?: LZTApiField[];
    user_groups?: {
        user_group_id: number;
        user_group_title: string;
        is_primary_group: boolean;
    }[];
    user_external_authentications?: {
        provider: string;
        provider_key: string;
    }[];
    links?: {
        permalink: string;
        detail: string;
        avatar: string;
        avatar_big?: string;
        avatar_small?: string;
        followers: string;
        followings: string;
        ignore?: string;
    };
    permissions?: {
        edit?: boolean;
        follow?: boolean;
        ignore?: boolean;
    };
    self_permissions?: {
        create_conversation?: boolean;
        upload_attachment_conversation?: boolean;
    };
    edit_permissions?: {
        password?: boolean;
        user_email?: boolean;
        username?: boolean;
        user_title?: boolean;
        primary_group_id?: boolean;
        secondary_group_ids?: boolean;
        user_dob_day?: boolean;
        user_dob_month?: boolean;
        user_dob_year?: boolean;
        fields?: boolean;
    };
    subscription_callback?: string;
}

type LZTApiCategory = {
    category_id: number;
    category_title: string;
    category_description: string;
    links: {
        permalink: string;
        detail: string;
        "sub-categories": string;
        "sub-forums": string;
    };
    permissions: {
        view: boolean;
        edit: boolean;
        delete: boolean;
    };
};
type LZTApiForum = {
    forum_id: number;
    forum_title: string;
    forum_description: string;
    forum_thread_count: number;
    forum_post_count: number;
    forum_is_follow: boolean;
    forum_prefixes: {
        group_title: string;
        group_prefixes: {
            prefix_id: number;
            prefix_title: string;
        }[];
    }[];
    thread_default_prefix_id: number;
    thread_prefix_is_required: boolean;
    links: {
        permalink: string;
        detail: string;
        followers: string;
        "sub-categories": string;
        "sub-forums": string;
        threads: string;
    };
    permissions: {
        view: boolean;
        edit: boolean;
        delete: boolean;
        follow: boolean;
        create_thread: boolean;
        upload_attachment: boolean;
    };
};

type LZTApiPage = {
    page_id: number;
    page_title: string;
    page_description: string;
    page_view_count: number;
    page_html: string;
    links: {
        permalink: string;
        detail: string;
        "sub-pages": string;
    };
    permissions: {
        view: boolean;
        edit: boolean;
        delete: boolean;
    };
};

/*
{
            notification_id: (int),
            notification_create_date: (unix timestamp in seconds),
            notification_is_unread: (boolean), # since forum-2015072301
            creator_user_id: (int), # since subscription-2014081001
            creator_username: (string), # since subscription-2014081001
            content_type: (string), # since forum-2017122001
            content_id: (int), # since forum-2017122001
            content_action: (string), # since forum-2017122001
            notification_type: (string), # since forum-2014080901
            notification_html: (string),
            links: {
                content: (uri), # since forum-2015041001
                creator_avatar: (uri), # since forum-2015080501
            }
        }
*/
type LZTApiNotification = {
    notification_id: number;
    notification_create_date: number;
    notification_is_unread: boolean;
    creator_user_id: number;
    creator_username: string;
    content_type: string;
    content_id: number;
    content_action: string;
    notification_type: string;
    notification_html: string;
    links: {
        content: string;
        creator_avatar: string;
    };
};

/*
{
        conversation_id: (int),
        conversation_title: (string),
        creator_user_id: (int),
        creator_username: (string),
        user_is_ignored: (boolean), # since forum-2015072304
        conversation_create_date: (unix timestamp in seconds),
        conversation_update_date: (unix timestamp in seconds),
        conversation_message_count: (int),
        conversation_has_new_message: (boolean),
        conversation_is_open: (boolean),
        conversation_is_deleted: (boolean),
        first_message: (conversation-message),
        last_message: (conversation-message), # must be in fields_include to work, since forum-2018032601
        recipients: [
            {
                user_id: (int),
                username: (string),
                avatar: (uri), # since forum-2018071201
                avatar_big: (uri), # since forum-2018071201
                avatar_small: (uri) # since forum-2018071201
            }
            ...
        ],
        links: {
            permalink: (uri),
            detail: (uri),
            messages: (uri)
        },
        permissions: {
            reply: (boolean),
            delete: (boolean),
            upload_attachment: (boolean) # since forum-2014081801
        }
    }
*/
type LZTApiConversation = {
    conversation_id: number;
    conversation_title: string;
    creator_user_id: number;
    creator_username: string;
    user_is_ignored: boolean;
    conversation_create_date: number;
    conversation_update_date: number;
    conversation_message_count: number;
    conversation_has_new_message: boolean;
    conversation_is_open: boolean;
    conversation_is_deleted: boolean;
    first_message: any;
    last_message: any;
    recipients: {
        user_id: number;
        username: string;
        avatar: string;
        avatar_big: string;
        avatar_small: string;
    }[];
    links: {
        permalink: string;
        detail: string;
        messages: string;
    };
    permissions: {
        reply: boolean;
        delete: boolean;
        upload_attachment: boolean;
    };
};


type LZTApiConversationMessage = {
    message_id: number;
    conversation_id: number;
    creator_user_id: number;
    creator_username: string;
    user_is_ignored: boolean;
    message_create_date: number;
    message_body: string;
    message_body_html: string;
    message_body_plain_text: string;
    signature: string;
    signature_html: string;
    signature_plain_text: string;
    message_account_count: number;
    attachments: {
        attachment_id: number;
        message_id: number;
        attachment_download_count: number;
        filename: string;
        attachment_is_inserted: boolean;
        attachment_width: number;
        attachment_height: number;
        links: {
            permalink: string;
            data: string;
            thumbnail: string;
        };
        permissions: {
            view: boolean;
            delete: boolean;
        };
    }[];
    links: {
        detail: string;
        conversation: string;
        creator: string;
        creator_avatar: string;
        report: string;
    };
    permissions: {
        view: boolean;
        edit: boolean;
        delete: boolean;
        reply: boolean;
        upload_attachment: boolean;
        report: string;
    };
};


export type LZTApiUserResponse = {
    user: LZTApiUser;
    system_info: {
        visitor_id: number;
        time: number;
    }
}

export type LZTApiFindUserResponse = {
    user: LZTApiUser[];
    system_info: {
        visitor_id: number;
        time: number;
    }
}

export type LZTApiNotificationsResponse = {
    notifications: LZTApiNotification[];
    notifications_total: number;
    links: {
        read: string;
        pages: number;
        page: number;
        next: string;
    };
    system_info: {
        visitor_id: number;
        time: number;
    };
}

export type LZTApiStandardResponse = {
    status: string;
    message: string;
    system_info: {
        visitor_id: number;
        time: number;
    };
}

export type LZTApiConversationsResponse = {
    conversations: LZTApiConversation[];
    conversations_total: number;
    system_info: {
        visitor_id: number;
        time: number;
    };
}

export type LZTApiConversationMessagesResponse = {
    messages: LZTApiConversationMessage[];
    messages_total: number;
    links?: {
        pages: number;
        prev: number;
        next: string;
    };
    conversation: LZTApiConversation;
    system_info: {
        visitor_id: number;
        time: number;
    };
}

export type LZTApiConversationMessageSentResponse = {
    message: LZTApiConversationMessage;
    system_info: {
        visitor_id: number;
        time: number;
    };
}

export type LZTApiGetIgnoredUsersResponse = {
    users: {
        user_id: number;
        username: string;
    }[];
    system_info: {
        visitor_id: number;
        time: number;
    };
}

export type LZTApiGetUserFollowResponse = {
    users: LZTApiUser[];
    users_total: number;
    system_info: {
        visitor_id: number;
        time: number;
    };
}