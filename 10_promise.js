
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise(resolve => setTimeout(resolve, 2000));

async function asyncCall() {
  console.log('calling');
  await sleep();  // cette ligne va attendre que la promesse de la fonction sleep soit résolue, donc 2 secondes.
  console.log("fini");
}

asyncCall();

module.exports = { sleep };