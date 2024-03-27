function detect_anagram(string_one, string_two) 
{
    const array_one = string_one.toLowerCase().replace(/\s/g,'').split("").sort().join('');
    const array_two = string_two.toLowerCase().replace(/\s/g,'').split("").sort().join('');
    return array_one === array_two;
}

console.log(detect_anagram("Astronomer", "Moon starer"));
console.log(detect_anagram("School master", "The classroom"));
console.log(detect_anagram("The Morse Code", "Here come dots"));