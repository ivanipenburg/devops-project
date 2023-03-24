/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrivateTask = /* GraphQL */ `
  query GetPrivateTask($id: ID!) {
    getPrivateTask(id: $id) {
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
export const listPrivateTasks = /* GraphQL */ `
  query ListPrivateTasks(
    $filter: ModelPrivateTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        completed
        createdAt
        updatedAt
        privateRoomTasksId
        owner
      }
      nextToken
    }
  }
`;
export const getPrivateRoom = /* GraphQL */ `
  query GetPrivateRoom($id: ID!) {
    getPrivateRoom(id: $id) {
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
export const listPrivateRooms = /* GraphQL */ `
  query ListPrivateRooms(
    $filter: ModelPrivateRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
