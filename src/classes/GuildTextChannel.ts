import { Client } from "../Client.ts";
import { Message } from "./Message.ts";
import { Channel } from "./Channel.ts";
import { GuildChannel } from "./GuildChannel.ts";

/**
 * Class representing a text channel in a guild
 * @extends GuildChannel
 */
export class GuildTextChannel extends GuildChannel {
	public rate_limit_per_user: number;
	public topic: string;
	public last_message_id: string;

	public messages: Map<string, Message> = new Map<string, Message>();
	// TODO: deal with messages. possible message limit from client options?
	// contemplate. ^_^

	constructor(data: any, client: Client) {
		super(data, client);

		this.rate_limit_per_user = data.rate_limit_per_user;
		this.topic = data.topic || null;
		this.last_message_id = data.last_message_id || null;
	}
}
