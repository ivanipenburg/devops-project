import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerPrivateTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateTask, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
  readonly room?: PrivateRoom | null;
  readonly roomID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrivateTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateTask, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
  readonly room: AsyncItem<PrivateRoom | undefined>;
  readonly roomID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PrivateTask = LazyLoading extends LazyLoadingDisabled ? EagerPrivateTask : LazyPrivateTask

export declare const PrivateTask: (new (init: ModelInit<PrivateTask>) => PrivateTask) & {
  copyOf(source: PrivateTask, mutator: (draft: MutableModel<PrivateTask>) => MutableModel<PrivateTask> | void): PrivateTask;
}

type EagerPrivateRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly tasks?: (PrivateTask | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrivateRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly tasks: AsyncCollection<PrivateTask>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PrivateRoom = LazyLoading extends LazyLoadingDisabled ? EagerPrivateRoom : LazyPrivateRoom

export declare const PrivateRoom: (new (init: ModelInit<PrivateRoom>) => PrivateRoom) & {
  copyOf(source: PrivateRoom, mutator: (draft: MutableModel<PrivateRoom>) => MutableModel<PrivateRoom> | void): PrivateRoom;
}