import {
	context, // visibility into account, contract and blockchain details
	ContractPromiseBatch, // make asynchronous calls to other contracts and receive callbacks
	logging, // append to the execution environment log (appears in JS Developer Console when using near-api-js)
	storage, // append to the execution environment log (appears in JS Developer Console when using near-api-js)
} from "near-sdk-as";

import { AccountId } from "../../utils";
import { Advertising, allAds } from "./model";

// Health Check
export function healtCheck(req: string, rep: string): string {
	storage.setString(req,rep);
	let result = storage.getString(req);
	if(result) {
		return "Going great!";
	}
	return "Heart rate of the function is abnormal!";
}

// Create and Publish an Advertising
export function publishAdvertising(text: string): News {
	logging.log("A scratch to the history of the Advertising future!");
	return Advertising.publish(text);
}

// Take a Look to Archieve
export function bringAdvertising(id: u32): Advertising {
	logging.log("You can send your thanks to the Advertisingman using 'sendGratitude' function!");
	return Advertising.bringFromArchieve(id);
}

// Read a Advertising
export function readAdvertising(): Advertising[] {
	assert(allAds.length > 0, "There is not a remarkable advertising in these days.");
	return Advertising.readAnAdvertising();
}

// Delete your Advertising
export function deleteAdvertising(id: u32): void {
	logging.log("Looking forward to your new advertising!");
	News.deleteAnAdvertising(id);
}

//Donate the Advertisingman
export function sendGratitude(advertisingman: AccountId): void{
	assert(context.accountBalance > context.attachedDeposit, "Your balance is not enough!");
	logging.log(`Warning! ${context.attachedDeposit.toString()} yoktoNEAR sent`);
	ContractPromiseBatch.create(advertisingman).transfer(context.attachedDeposit);
}
