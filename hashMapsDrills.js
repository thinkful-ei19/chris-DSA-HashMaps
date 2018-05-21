const HashMap = require('./hashMaps');

let lor = new HashMap();

lor.set("Hobbit", "Bilbo")
lor.set("Hobbit", "Frodo")
lor.set("Wizard", "Gandolf")
lor.set("Human", "Aragorn")
lor.set("Elf", "Legolas")
lor.set("Maiar", "The Necromancer")
lor.set("Maiar", "Sauron")
lor.set("RingBearer", "Gollum")
lor.set("LadyOfLight", "Galadriel")
lor.set("HalfElven", "Arwen")
lor.set("Ent", "Treebeard")

// console.log(lor.get("Maiar"))

function palindrome(string) {

    let stringHash = new HashMap();
    
    let odd = false;
    let result = true;
    for (i=0; i<string.length; i++) {
        stringHash.count(string[i])
    }

    for (i=0; i<string.length; i++) {
        let charValue = stringHash.get(string[i]);
        if (charValue % 2 === 1 && odd === false) {
            odd = true;
        } else if (charValue % 2 === 1 && odd === true) {
            result = false;
        }
    }
    console.log(result)
    return result
}

palindrome("racecar")
palindrome("nope")
palindrome("reallyy")
palindrome("eeee")
palindrome("abcdab")
palindrome("abcdbca")

function anagramGrouping (arr, result = [], index = 0) {
    
    if (result.length === 0) {
        result.push([arr[index]])
        index++
        anagramGrouping(arr, result, index)
    } else if (arr.length > index) {
        let hash = new HashMap();
        hash.splitString(arr[index])
        let append = true;
        for (i=0; i<result.length; i++) {
            if (hash.compare(result[i][0]) === true) {
                result[i].push(arr[index])
                append = false;
                break
            } 
        }
        if (append === true) {
            result.push([arr[index]])
        }
        index++                
        anagramGrouping(arr, result, index)
    } else {
        console.log(result)
        return result
    }    
}

anagramGrouping(['east', 'eats', 'cars', 'acre', 'arcs',
 'teas', 'race'])

// let test = new HashMap();
// test.splitString('eats')
// console.log(test.compare('cars'))

