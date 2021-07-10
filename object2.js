//Q5

var library = [ 
    {
        author: 'The Road Ahead',
        title: 'Bill Gates',       
        readingStatus: true
    },
    {
        author: 'Walter Isaacson',
        title: 'Steve Jobs',       
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

   console.log(library[2])

   console.log(library.length)
    
   for (var i = 0; i < library.length; i++) 
   {
    var book = library[i].title  + ' by ' + library[i].author;
    if (library[i].readingStatus) {
      console.log('You have Already read'+' ' + book);
    } else
    {
     console.log('You still need to read'+' ' + book);
    }
   }