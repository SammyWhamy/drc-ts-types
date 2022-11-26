import {Snowflake} from "./common.js";

// https://discord.com/developers/docs/resources/channel#forum-tag-object
export type tag = {
    id: Snowflake;
    name: string;
    moderated: boolean;
    // * These could possibly be normalized to emoji: id | name
    emoji_id: Snowflake | null;
    emoji_name: string | null;
}
