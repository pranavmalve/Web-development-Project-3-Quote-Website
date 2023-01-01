function generate() {
  let quotes = {
        "- Thanos" : '"THE HARDEST CHOICE REQUIRE A STRONGEST SOUL"',
        "- kaneki" : '"TOUGH LIFE CREATES STRONGEST SOUL."',
        "-Itachi" : '"NEVER TRUST ON SOMEONE TOO MUCH ,REMEMBER THE DEVIL WAS ONCE AN ANGEL."', 
        "-Luffy"   : '"FORGETING IS LIKE A WOUND,A WOUND MAY BE HEAL BUT IT HAS ALREADY LEAVE A SCAR . "',
        "-Kaneki":'"NEVER RUST ANYONE TOO MUCH ,REMEMBER THE DEVIL WAS ONCE ANGEL"',
        "-GOKU":'"THE FEAR ONLY CAN EXIST IS IN THE THOUGHT OF OUR FUTURE "'
    }
    let authors = Object.keys(quotes);

    let author =authors[Math.floor(Math.random() *authors.length)];

 let quote = quotes[author];

    
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
    
    
}