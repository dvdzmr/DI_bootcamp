sentence = "The movie is not that bad, I like it";

wordNot = sentence.indexOf("not");
wordBad = sentence.indexOf("bad");


if (wordBad > wordNot)
{
    sentence = sentence.replace("not that bad", 'good');
}

console.log(sentence);


const maxNum = 6;

for (let i = 0; i < maxNum; i++)
{
    const stars = i + 1;
    let lines = "";
    for (let j = 0; j<stars; j++)
    {
        lines = lines + "*";
    }
    console.log(lines)
}