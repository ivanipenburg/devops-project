/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrivateTask = /* GraphQL */ `
  query GetPrivateTask($id: ID!) {
    getPrivateTask(id: $id) {
      id
      title
      completed
      room {
        id
        name
        tasks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      roomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        room {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        roomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateTasks = /* GraphQL */ `
  query SyncPrivateTasks(
    $filter: ModelPrivateTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        completed
        room {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        roomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrivateRoom = /* GraphQL */ `
  query GetPrivateRoom($id: ID!) {
    getPrivateRoom(id: $id) {
      id
      name
      tasks {
        items {
          id
          title
          completed
          roomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        tasks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateRooms = /* GraphQL */ `
  query SyncPrivateRooms(
    $filter: ModelPrivateRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        tasks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
