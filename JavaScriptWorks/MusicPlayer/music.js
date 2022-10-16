class Music 
{
    constructor(title,singer,img,file)
    {
        this.title = title
        this.singer = singer
        this.img = img
        this.file = file
    }
    getName()
    {
        return this.title + " => " + this.title
    }
}

const musicList = [
    new Music("Mood Swings","Pop Smoke","1.jpeg","1.mp3"),
    new Music("Imperfections","Pop Smoke","2.jpeg","2.mp3"),
    new Music("Dior","Pop Smoke","3.jpeg","3.mp3")
]