class Video{
    constructor(title, uploader, time)
    {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }


    watch()
    {
        return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
}


myMovie = new Video("Lawrence of Arabia", "British museum", "3 hours and 46 minutes");
console.log(myMovie.watch());
anotherMovie = new Video("12 angry men", "A crazy person", "2 hours and 23 minutes");
console.log(anotherMovie.watch());