// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PrivateTask, PrivateRoom } = initSchema(schema);

export {
  PrivateTask,
  PrivateRoom
};