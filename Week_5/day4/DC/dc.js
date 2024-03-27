document.getElementById('libform').addEventListener('submit', function (event) 
{
    event.preventDefault();
    createStory();
});

document.getElementById('shuffle-button').addEventListener('click', function () 
{
    for (let i = 0; i < 3; i++) 
    {
        createStory();
    }
});

function createStory() {
    var noun = document.getElementById('noun').value;
    var adjective = document.getElementById('adjective').value;
    var person = document.getElementById('person').value;
    var verb = document.getElementById('verb').value;
    var place = document.getElementById('place').value;

    if (noun && adjective && person && verb && place) 
    {
        var stories = [
            `In the most beautiful town in Israel, ${place}, there was a ${adjective} ${noun} who went by the name of  ${person}.`,
            `${person} wants to attend a concert in ${place}, but on the way there was a ${adjective} ${noun} blocking the path.`,
            `A journey beyond sight and sound, ${person} must battle demons from the past. Will they be able to overcome ${noun} ${adjective}  and travel to ${place}`
        ];
        var randomIndex = Math.floor(Math.random() * stories.length);
        document.getElementById('story').textContent = stories[randomIndex];
    } 
    else 
    {
        alert('Fill in all fields');
    }
}