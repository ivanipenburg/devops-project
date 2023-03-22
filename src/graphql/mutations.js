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
      createdAt
      updatedAt
      privateRoomTasksId
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
      createdAt
      updatedAt
      privateRoomTasksId
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
      createdAt
      updatedAt
      privateRoomTasksId
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
        nextToken
      }
      createdAt
      updatedAt
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
        nextToken
      }
      createdAt
      updatedAt
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
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
