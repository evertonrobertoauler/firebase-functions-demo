import * as functions from 'firebase-functions';

export const onAction = functions.database.ref('actions/{pushId}').onWrite(event => {
  console.log(event.params, event.data.val());
});
