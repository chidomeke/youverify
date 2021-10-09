'use strict'

/** isStringUnique: an algorithm to determine if a string has all unique characters. Accepts a string as a parameter*/

function isStringUnique(s) {
  //convert the string to an array and sort alphabetically
  const str = s.split('').sort()

  let prevChar = ''

  let result = true
  //loop through the airray elements and check if any element is repeated.
  //If repeated set result to false; i.e: The string is not unique
  for (let i = 0; i < s.length; i++) {

    if (str[i] === prevChar) {

      result = false

    }

    prevChar = s[i]

  }

  return result
}

const string = 'abcd'
console.log(isStringUnique(string))

/** checkPermutation: A method to decide if one of two strings is a permutation of the other. It accepts two strings as a parameter*/

function checkPermutation(m, n) {

  let result
  //Check the difference between the length of the strings.
  let len = m.length - n.length
  //Loop through the shorter string
  if (len > 0) {

    for (let i = 0; i < n.length; i++){
      //Check if each character in the short string is included in the long string.
      result = m.includes(n[i])
      //if the method returns false break out of the loop
      if (!result) {

        break

      }

    }

  } else {
    //Same procedure as above.
    for (let i = 0; i < m.length; i++){

      result = n.includes(m[i])

      if (!result) {

        break

      }

    }

  }

  return result
}

const s1 = 'tictac'
const s2 = 'cccccttttt'

console.log(checkPermutation(s2, s1))

/**stringURLify: A method to replace all spaces in a string with "%20". You may assume that the string has enough space at the end to hold the additionall characters, and that you are given the true length of the string. Example: input "Mr John Doe". output "Mr%20John%20Doe. It accepts the string to be converted as a parameter."*/

function stringURLify(string) {
  //Use the in-built encodeURI() function to replace all spaces in the string.
  return encodeURI(string)

}

const url = 'Mr John Smith  '

console.log(stringURLify(url))

/**isPalindromePermutaion: A function to check if a string is a permutatiion of a palindrome. A palindrome is a word or a phrase that is the same forward and backward. A permutaion is a rearrangement of letters. A palindrome does not need to be limited to just dictionary words.
 * Example:
 * input: "Tact Coa"
 * output: True (permutation: 'taco cat', 'atco cta', e.t.c)
 */

function isPalindromePermutation(p) {

  const arr = p.toLowerCase().replace(/\s/g, '').split('').sort()

  let result, prevValue = arr[0], arr2 = []
  let count = 0

  if (arr.length % 2 === 0) {
    return false
  }
  
  for (let k in arr) {
    if (prevValue === arr[k]) {
      count++
    } else {
      arr2.push(prevValue+""+count)
      count = 1
    }
    prevValue = arr[k]
  }

  return result
}

const palindrome = 'Tact Ca a'
const pal = 'madam'

console.log(isPalindromePermutation(palindrome))

/**isEdited: A function to check if two strings are one edit(or zero edit) away. There are three types of edits that can be performed on strings: insert a character, replace a character or remove a character.
 * Example:
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
*/

function isEdited(s, t) {

  let result,
    edited = 0

  let len = s.length - t.length

  if (len > 0) {

    for (let i = 0; i < s.length; i++){

      result = t.includes(s[i])

      if (!result) {

        edited += 1

      }

    }

  } else {

    for (let i = 0; i < t.length; i++){

      result = s.includes(t[i])

      if (!result) {

        edited += 1

      }

    }

  }

  if (edited > 1) {
    
    return false
  }

  return true
}

const subSet = {
  s1: 'pale',
  s2: 'ple',
  s3: 'pales',
  s4: 'bale',
  s5: 'bake'
}

console.log(isEdited(subSet.s2, subSet.s5))

/**compressString: Is a method to perform basic string compression using the counts of repeated characters. Accepts a string as parameter. For example the string "aabcccccaaa" would become a2b1c5a3. If the "compressed" string will not become any smaller than the original string return the original string. You may assume the string has only uppercase and lowercase letters (a - z) */

function commpressString(s) {

  let prevCharacter = ""

  let count = 0, compressedElement = ''

  for(let i = 0; i < s.length; i++){

    count += 1

    if (prevCharacter != '') {

      if (prevCharacter != s[i]) {

        compressedElement += prevCharacter + '' + count

        count = 0

      }

      if (i === (s.length - 1)) {

        if (prevCharacter === s[i]) {

          count += 1

        }

        if (!count) {

          count += 1

        }

        compressedElement += s[i] + '' + count

      }

    }

    prevCharacter = s[i]

  }

  if (s.length === compressedElement.length) {

    return s

  }

  return compressedElement

}
git
const repStrings = "aabcccccaaa"

console.log(commpressString(repStrings))