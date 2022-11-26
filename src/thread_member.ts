import {Snowflake} from "./common.js";

// https://discord.com/developers/docs/resources/channel#thread-member-object
export type thread_member = {
    id?: Snowflake;
    user_id?: Snowflake;
    join_timestamp: string;
    flags: number;
}
