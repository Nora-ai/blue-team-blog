const db = require('../db/connection')
const Blog = require('../models/blog')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const blogs = 
    [
      {
        "title": "Chronicles of Constellations",
        "imgURL": "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "post": "You gotta shove these seeds way up your butt Morty, waay up there. I'll tell you how I feel about school, Jerry. It's a waste of time. Bunch of people runnin' around bumpin' into each other, got a guy up front says, '2 + 2,' and the people in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin'. I mean, it's not a place for smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the issue. Listen, Morty, I hate to break it to you but what people call love is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science. Oh my god, how could I not see this coming? My lust, my greed! I deserve thiiiiii- Ladies, let's get out of here. I haven't learned a thiiiiiing! ",
        "author": "Kelly Appiah"
      },
      {
        "title": "Monicles of Mononucleuosis",
        "imgURL": "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "post": "What, cover me in gasoline and spiders? Fine, yeah, I'm in. Yes. He's a getaway driver with Asperger's and my butthole is a demolitions expert. It's a figure of speech, Morty! They're bureaucrats! I don't respect them. Just keep shooting, Morty! You have no idea what prison is like here! Sometimes science is a lot more art, than science. A lot of people don't get that.",
        "author": "Alienora"
      },
      {
        "title": "Astronomical Astrolopetifcus Patrenarsis",
        "imgURL": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "post": "It's been six hours. Dreams move one... one-hundredth the speed of reality, and dog time is one-seventh human time. So y'know, every day here is like a minute. It's like Inception, Morty, so if it's confusing and stupid, then so is everyone's favorite movie. Hey listen, you know, if we're all bored over here, wouldn't the common denominator be you? I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me. Nothing you do matters, your existence is a lie!",
        "Author": "Tommy Miller"
      }

      ]

    await Blog.insertMany(blogs)
    console.log("Created Blogs!")
}
const run = async () => {
    await main()
    db.close()
}

run()