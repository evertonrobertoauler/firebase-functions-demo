import * as functions from 'firebase-functions';

export const onAction = functions.database.ref('/actions/{pushId}')
  .onWrite(async event => {
    const snapshot = await event.data.ref.root.child('/actions').once('value');
    console.log(snapshot.val(), event.params, event.data.val());
  });
