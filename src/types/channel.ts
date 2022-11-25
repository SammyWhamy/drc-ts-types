import {Snowflake} from "./common.js";

export type channel = {
    id: Snowflake;
    type: 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;
    guild_id?: Snowflake;
    position?: number;
    permission_overwrites?: permission_overwrite[]; // Cannot be normalized because overwrites do not have a unique ID
    name?: string | null;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: Snowflake | null;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: Set<Snowflake>; // This is a Set in redis to reference user objects
    icon?: string | null;
    owner_id?: Snowflake;
    application_id?: Snowflake;
    parent_id?: Snowflake | null;
    last_pin_timestamp?: string | null; // ISO 8601 timestamp
    rtc_region?: string | null;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: thread_metadata; // Not normalized because it only belongs to this object
    member?: thread_member; // Not sure if this is worth normalizing, as every member has a different join_timestamp
    default_auto_archive_duration?: number;
    permissions?: string;
    flags?: number;
    total_message_sent?: number;
    available_tags?: Set<Snowflake>; // This is a Set in redis to reference tag objects
    applied_tags?: Snowflake[];
    default_reaction_emoji?: default_reaction | null; // Could be normalized to the ID or name
    default_thread_rate_limit_per_user?: number;
    default_sort_order?: 0 | 1 | null;
}

export type permission_overwrite = {
    id: Snowflake;
    type: 0 | 1;
    allow: string;
    deny: string;
}

export type thread_metadata = {
    archived: boolean;
    auto_archive_duration: number;
    archive_timestamp: string; // ISO 8601 timestamp
    locked: boolean;
    invitable?: boolean;
    create_timestamp?: string | null; // ISO 8601 timestamp
}

export type thread_member = {
    // id and user_id are not present on GUILD_CREATE events, present otherwise
    id?: Snowflake;
    user_id?: Snowflake;
    join_timestamp: string; // ISO 8601 timestamp
    flags: number;
}

export type default_reaction = {
    // Either of these will be non-null, for custom emoji, the id will be non-null, for unicode emoji, the name will be non-null
    emoji_id: Snowflake | null;
    emoji_name: string | null;
}
