import {Snowflake} from "./common.js";

export type auto_moderation_rule = {
    id: Snowflake;
    guild_id: Snowflake;
    name: string;
    creator_id: Snowflake;
    event_type: 1;
    trigger_type: 1 | 3 | 4 | 5;
    trigger_metadata: trigger_metadata; // Not normalized because it only belongs to this object
    actions: action[]; // Not normalized because it only belongs to this object
    enabled: boolean;
    exempt_roles: Snowflake[];
    exempt_channels: Snowflake[];
}

export type trigger_metadata = {
    keyword_filter: string[];
    regex_patterns: string[];
    presets: (1 | 2 | 3)[];
    allow_list: string[];
    mention_total_limit: number;
}

export type action = {
    type: 1 | 2 | 3;
    metadata?: action_metadata; // Not normalized because it only belongs to this object
}

export type action_metadata = {
    channel_id: Snowflake;
    duration_seconds: number;
}
