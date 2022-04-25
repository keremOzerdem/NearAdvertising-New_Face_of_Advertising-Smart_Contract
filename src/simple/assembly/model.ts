import {
	context, // visibility into account, contract and blockchain details 
	PersistentUnorderedMap, // data structure that wraps storage
	math, // utility math function for hashing using SHA and Keccak as well as pseudo-random data
	logging, 
} from "near-sdk-as";

export const allAds = new PersistentUnorderedMap<u32, Advertising>("allAds");

@nearBindgen
export class Advertising{
	id: u32;
	sender: string;
	date: u64;

	constructor(public text: string){
		this.id = math.hash32<string>(text);
		this.sender = context.sender;
		this.date = context.blockTimestamp;
	}

	static publish(text: string): Advertising {
		const advertising = new Advertising(text);
		allAds.set(advertising.id, advertising);
		return advertising;
	}

	static bringFromArchieve(id: u32): Advertising {
		assert(allAdds.contains(id), "Advertising could not found! Please, check ID of the advertising!");
		return allAdds.getSome(id);
	}
	
	static readAnAdvertising(): Advertising[] {
		let start: u32=0;
		logging.log("You can donate to an Advertisingman using 'sendGratitude' function!");
		return allAds.values(start, allAds.length);
	}

	static deleteAnAdvertising(id: u32): void {
		const advertising = allAds.getSome(id);
		assert(advertising.sender == context.sender, "It is not your advertising! Firstly, you need to publish an Advertising to delete it! Use 'publishAdvertising' function");
		allAds.delete(id);
	}
}

