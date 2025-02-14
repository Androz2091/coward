import { Client } from "../Client.ts"
import { User, Channel } from "../Classes.ts"
/**
 * Class representing a DM channel
 * @extends Channel
 */
export class DMChannel extends Channel {
	public recipients: Array<User>
	public lastMessageID: string // TODO(fox-cat): contemplate message object here?
	protected _client: Client

	constructor(data: any, client: Client) {
		super(data, client)

		// reading over this again. was going to do something in here but
		// WTF kinda code did i think this was reasonable wtf ???
		// TODO: deal with this shit. why did i create an entire new array
		// for ?!?!?!?
		let arr: Array<any> = []
		for (let i in data.recipients) {
			arr[<any>i] = new User(data.recipients[i], client)
		}
		this._client = client
		this.recipients = arr
		this.lastMessageID = data.last_message_id
	}

	send(content: string) {
		this._client.postMessage(this.id, content)
	}

}
