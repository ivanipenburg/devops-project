/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrivateTask = /* GraphQL */ `
  subscription OnCreatePrivateTask(
    $filter: ModelSubscriptionPrivateTaskFilterInput
    $owner: String
  ) {
    onCreatePrivateTask(filter: $filter, owner: $owner) {
      id
      title
      completed
      createdAt
      updatedAt
      privateRoomTasksId
      owner
    }
  }
`;
export const onUpdatePrivateTask = /* GraphQL */ `
  subscription OnUpdatePrivateTask(
    $filter: ModelSubscriptionPrivateTaskFilterInput
    $owner: String
  ) {
    onUpdatePrivateTask(filter: $filter, owner: $owner) {
      id
      title
      completed
      createdAt
      updatedAt
      privateRoomTasksId
      owner
    }
  }
`;
export const onDeletePrivateTask = /* GraphQL */ `
  subscription OnDeletePrivateTask(
    $filter: ModelSubscriptionPrivateTaskFilterInput
    $owner: String
  ) {
    onDeletePrivateTask(filter: $filter, owner: $owner) {
      id
      title
      completed
      createdAt
      updatedAt
      privateRoomTasksId
      owner
    }
  }
`;
export const onCreatePrivateRoom = /* GraphQL */ `
  subscription OnCreatePrivateRoom(
    $filter: ModelSubscriptionPrivateRoomFilterInput
    $owner: String
  ) {
    onCreatePrivateRoom(filter: $filter, owner: $owner) {
      id
      name
      tasks {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateRoom = /* GraphQL */ `
  subscription OnUpdatePrivateRoom(
    $filter: ModelSubscriptionPrivateRoomFilterInput
    $owner: String
  ) {
    onUpdatePrivateRoom(filter: $filter, owner: $owner) {
      id
      name
      tasks {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateRoom = /* GraphQL */ `
  subscription OnDeletePrivateRoom(
    $filter: ModelSubscriptionPrivateRoomFilterInput
    $owner: String
  ) {
    onDeletePrivateRoom(filter: $filter, owner: $owner) {
      id
      name
      tasks {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
