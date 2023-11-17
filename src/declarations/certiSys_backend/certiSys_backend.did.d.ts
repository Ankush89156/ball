import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type List = [] | [[Principal, List]];
export interface _SERVICE {
  'getCertificate' : ActorMethod<[Principal], string>,
  'getId' : ActorMethod<[], Principal>,
  'getUsers' : ActorMethod<[], List>,
  'registerUser' : ActorMethod<[string], string>,
}
