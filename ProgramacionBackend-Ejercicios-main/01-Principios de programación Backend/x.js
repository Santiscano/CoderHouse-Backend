function stringPermutations(str){
    var array = getPermutations(str);
    array = removeDuplicates(array);
    return array.sort();
}

function getPermutations(str){
    var permutations = [],
        nextWord = [],
        chars = [];

    if (typeof str === 'string') chars = str.split('');
    else if (typeof str === 'number') {
        str = str + "";
        chars = str.split('');
    }

    permutate(chars);

    return permutations;

    function permutate(chars) {
        if (chars.length === 0) permutations.push(nextWord.join(''));
        for (var i=0; i < chars.length ;i++){
            chars.push(chars.shift());
            nextWord.push(chars[0]);
            permutate(chars.slice(1));
            nextWord.pop();
        }
    }
}

removeDuplicates = array => array.filter((item, index) => array.indexOf(item) == index)

s = "CBA"
console.log(stringPermutations(s));


// quiz 2

let freq = {}
const mostFrequentSum = (t) => {
    const getAllSums = (tree) => {
        if (!tree) {
            return 0
        }
        const sum = getAllSums(tree.left) + getAllSums(tree.right) + tree.value
        freq[sum] = (freq[sum] || 0) + 1
        return sum
    }
    getAllSums(t)
    const maxFreq = Object.values(freq).reduce((mx, cur) => Math.max(mx, cur), 0)
    return Object.keys(freq)
                 .filter(key => freq[key] === maxFreq)
                 .map(key => parseInt(key))
                 .sort((a, b) => a - b)
}

var t = { "value": 1, "left": { "value": 2, "left": null, "right": null }, "right": { "value": 3, "left": null, "right": null } }

mostFrequentSum(t)

// test 3
// Si a: [6, 7, 3, 8] ¿cuál será el valor final de res?
const nextLarger = (a) => {
    const res = [];
    for (let i=0; i < a.length ; i++) {
        let currNum = a[i];
        for (let n = i; n < a.length; n++){
            if (a[n] > currNum) {
                res.push(a[n]);
                break;
            } else if (n === a.length - 1) {
                res.push(-1);
            }
        }
    }
    return res
}

console.log(nextLarger([6, 7, 3, 8]))

// test 4
// ¿Qué valor tiene que ir en lugar de los puntos suspensivos del código?, sabiendo que: Una oración se considera correcta si: - Comienza con una letra mayúscula - Termina con un punto final, signo de interrogación o signo de exclamación ('.', '?' o '!') - El punto final, los signos de interrogación y los signos de exclamación no aparecen en ningún otro lugar de la oración - Dada una oración, devuelve verdadero si es correcto y falso de lo contrario Ejemplo Para frase = "Este es un ejemplo de * correcta * oración." la salida debe ser: isSentenceCorrect (oración) = verdadero Para la oración = "! Esta oración es TOTALMENTE incorrecta" la salida debe ser: isSentenceCorrect (oración) = falso


// test 5
// El siguiente algoritmo posee un bug. ¿En qué línea se encuentra?
function groupingDishes(dishes) {
    // object of ingredients
    var ingredients = {},
        // list of groups
        groups = [],
        dish, i, ingredient;

    // fill ingredient object
    for (dish in dishes) {
        for (i=0 ; ingredient = dish; i++){
            if (ingredients[ingredient]) {
                ingredients[ingredient].push(dish[0]);
            } else {
                ingredients[ingredient] = [dish[0]];
            }
        }
    }

    // filter ingredients by group length and sort dishes
    for (i in ingredients) {
        if (ingredients[i].length > 1) {
            groups.push([i, ...ingredients[i].sort()])
        }
    }

    // return sorted list of groups
    return groups.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0])
}

// reto 6
// Si statues: [6, 2, 3, 8]. ¿Qué valor retorna el siguiente algoritmo?
function makeArrayConsecutive2(statues) {
    var sorted = statues.sort((a, b) => a - b)
    var full = sorted[sorted.length - 1] - sorted[0] + 1;
    return full - sorted.length
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))