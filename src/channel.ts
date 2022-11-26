import {Snowflake} from "./common.js";

// https://discord.com/developers/docs/resources/channel#channel-object
export type channel = {
    id: Snowflake;
    type: 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;
    guild_id?: Snowflake;
    position?: number;
    permission_overwrites?: permission_overwrite[];
    name?: string | null;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: Snowflake | null;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: Snowflake[]; // NORMALIZED FIELD: User
    icon?: string | null;
    owner_id?: Snowflake;
    application_id?: Snowflake;
    parent_id?: Snowflake | null;
    last_pin_timestamp?: string | null;
    rtc_region?: string | null;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: thread_metadata
    member?: Snowflake; // NORMALIZED FIELD: Thread member
    default_auto_archive_duration?: number;
    permissions?: string;
    flags?: number;
    total_message_sent?: number;
    available_tags?: Snowflake[]; // NORMALIZED FIELD
    applied_tags?: Snowflake[];
    default_reaction_emoji?: default_reaction | null; // * Could possibly be normalized to emoji: id | name
    default_thread_rate_limit_per_user?: number;
    default_sort_order?: 0 | 1 | null;
}

// https://discord.com/developers/docs/resources/channel#overwrite-object
export type permission_overwrite = {
    id: Snowflake;
    type: 0 | 1;
    allow: string;
    deny: string;
}

// https://discord.com/developers/docs/resources/channel#thread-metadata-object
export type thread_metadata = {
    archived: boolean;
    auto_archive_duration: number;
    archive_timestamp: string;
    locked: boolean;
    invitable?: boolean;
    create_timestamp?: string | null;
}

// https://discord.com/developers/docs/resources/channel#default-reaction-object
export type default_reaction = {
    emoji_id: Snowflake | null;
    emoji_name: string | null;
}
