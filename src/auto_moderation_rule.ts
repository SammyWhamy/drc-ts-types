import {Snowflake} from "./common.js";

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object
export type auto_moderation_rule = {
    id: Snowflake;
    guild_id: Snowflake;
    name: string;
    creator_id: Snowflake;
    event_type: 1;
    trigger_type: 1 | 3 | 4 | 5;
    trigger_metadata: trigger_metadata;
    actions: action[];
    enabled: boolean;
    exempt_roles: Snowflake[];
    exempt_channels: Snowflake[];
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata
export type trigger_metadata = {
    keyword_filter: string[];
    regex_patterns: string[];
    presets: (1 | 2 | 3)[];
    allow_list: string[];
    mention_total_limit: number;
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object
export type action = {
    type: 1 | 2 | 3;
    metadata?: action_metadata;
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
export type action_metadata = {
    channel_id: Snowflake;
    duration_seconds: number;
}
