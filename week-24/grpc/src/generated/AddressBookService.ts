// Original file: a.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetPersonByNameRequest as _GetPersonByNameRequest, GetPersonByNameRequest__Output as _GetPersonByNameRequest__Output } from './GetPersonByNameRequest';
import type { GetPersonRequest as _GetPersonRequest, GetPersonRequest__Output as _GetPersonRequest__Output } from './GetPersonRequest';
import type { GetPersonResponse as _GetPersonResponse, GetPersonResponse__Output as _GetPersonResponse__Output } from './GetPersonResponse';
import type { Person as _Person, Person__Output as _Person__Output } from './Person';

export interface AddressBookServiceClient extends grpc.Client {
  AddPerson(argument: _Person, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  AddPerson(argument: _Person, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  AddPerson(argument: _Person, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  AddPerson(argument: _Person, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  
  GetPerson(argument: _GetPersonRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  GetPerson(argument: _GetPersonRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  GetPerson(argument: _GetPersonRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  GetPerson(argument: _GetPersonRequest, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  getPerson(argument: _GetPersonRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  getPerson(argument: _GetPersonRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  getPerson(argument: _GetPersonRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  getPerson(argument: _GetPersonRequest, callback: grpc.requestCallback<_GetPersonResponse__Output>): grpc.ClientUnaryCall;
  
  GetPersonByName(argument: _GetPersonByNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  GetPersonByName(argument: _GetPersonByNameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  GetPersonByName(argument: _GetPersonByNameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  GetPersonByName(argument: _GetPersonByNameRequest, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _GetPersonByNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _GetPersonByNameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _GetPersonByNameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _GetPersonByNameRequest, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  
}

export interface AddressBookServiceHandlers extends grpc.UntypedServiceImplementation {
  AddPerson: grpc.handleUnaryCall<_Person__Output, _Person>;
  
  GetPerson: grpc.handleUnaryCall<_GetPersonRequest__Output, _GetPersonResponse>;
  
  GetPersonByName: grpc.handleUnaryCall<_GetPersonByNameRequest__Output, _Person>;
  
}

export interface AddressBookServiceDefinition extends grpc.ServiceDefinition {
  AddPerson: MethodDefinition<_Person, _Person, _Person__Output, _Person__Output>
  GetPerson: MethodDefinition<_GetPersonRequest, _GetPersonResponse, _GetPersonRequest__Output, _GetPersonResponse__Output>
  GetPersonByName: MethodDefinition<_GetPersonByNameRequest, _Person, _GetPersonByNameRequest__Output, _Person__Output>
}
