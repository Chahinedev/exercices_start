
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */

const getGroupName  = utilisateur => utilisateur.group?.name;


console.log(getGroupName ({ name: "vegeta", group: { name: "Kamehamehaaaa" } })); // Affiche: "admin"
console.log(getGroupName ({ name: "piccolo", group: null })); // Affiche: undefined
console.log(getGroupName ({ name: "sangoku" })); // Affiche: undefined


module.exports = {getGroupName};