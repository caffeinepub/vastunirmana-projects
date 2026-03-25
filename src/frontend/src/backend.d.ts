import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllMessages(): Promise<Array<ContactMessage>>;
    getCallerMessages(): Promise<Array<ContactMessage>>;
    submitMessage(message: ContactMessage): Promise<void>;
}
