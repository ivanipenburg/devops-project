/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrivateTask = /* GraphQL */ `
  mutation CreatePrivateTask(
    $input: CreatePrivateTaskInput!
    $condition: ModelPrivateTaskConditionInput
  ) {
    createPrivateTask(input: $input, condition: $condition) {
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
export const updatePrivateTask = /* GraphQL */ `
  mutation UpdatePrivateTask(
    $input: UpdatePrivateTaskInput!
    $condition: ModelPrivateTaskConditionInput
  ) {
    updatePrivateTask(input: $input, condition: $condition) {
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
export const deletePrivateTask = /* GraphQL */ `
  mutation DeletePrivateTask(
    $input: DeletePrivateTaskInput!
    $condition: ModelPrivateTaskConditionInput
  ) {
    deletePrivateTask(input: $input, condition: $condition) {
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
export const createPrivateRoom = /* GraphQL */ `
  mutation CreatePrivateRoom(
    $input: CreatePrivateRoomInput!
    $condition: ModelPrivateRoomConditionInput
  ) {
    createPrivateRoom(input: $input, condition: $condition) {
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
export const updatePrivateRoom = /* GraphQL */ `
  mutation UpdatePrivateRoom(
    $input: UpdatePrivateRoomInput!
    $condition: ModelPrivateRoomConditionInput
  ) {
    updatePrivateRoom(input: $input, condition: $condition) {
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
export const deletePrivateRoom = /* GraphQL */ `
  mutation DeletePrivateRoom(
    $input: DeletePrivateRoomInput!
    $condition: ModelPrivateRoomConditionInput
  ) {
    deletePrivateRoom(input: $input, condition: $condition) {
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
