import {Snowflake} from "./common.js";

export type tag = {
    id: Snowflake;
    name: string;
    moderated: boolean;
    // Either of these will be non-null, for custom emoji, the id will be non-null, for unicode emoji, the name will be non-null
    // This could be normalized to emoji: id | name
    emoji_id: Snowflake | null;
    emoji_name: string | null;
}
