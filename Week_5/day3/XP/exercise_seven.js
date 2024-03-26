
const book_one = {
    title: "My book",
    author: "My author",
    image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    alreadyRead: true
};

const book_two = {
    title: "My book",
    author: "My author",
    image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    alreadyRead: false
};

allBooks = [book_one, book_two]


var mydiv = document.createElement('div');
var mypic = document.createElement('img');
mypic.setAttribute("src", allBooks[0].image);
mypic.setAttribute("height", "100");
mypic.setAttribute("width", "100");
mypic.setAttribute("alt", "Flower");
mydiv.innerHTML += allBooks[0].title + allBooks[0].author
mydiv.appendChild(mypic)

if (allBooks[0].alreadyRead)
{
    mydiv.style.color = "red"
}

var mysection = document.getElementById('listBooks')
mysection.appendChild(mydiv)
console.log(mysection.innerHTML)
