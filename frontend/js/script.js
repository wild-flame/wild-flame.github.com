// reset scroll position
window.onbeforeunload = function(){
    window.scrollTo(0,0);
}
    

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}// All the rest
document.addEventListener('DOMContentLoaded', function(){

    // Fetch and then rest the content of the logo
    var logo = document.querySelector('.logo');

    // Array contenente
    var titoli = ['Growth Hacker' ,'Anime Fans', 'Musical Instrument Player', "Blockchain Enthusiast", "Front-end Developer", "Javascript" ]; //, 'Leukemia Survivor'
    var titoli_copy = titoli.slice()
    var titolo = titoli[Math.floor(Math.random()*titoli.length)];

    // Inizializzo il typewriter
    var typewriter = require('typewriter');
    var tw = typewriter(document.querySelector('.logo')).withAccuracy(100)
                                                        .withMinimumSpeed(13)
                                                        .withMaximumSpeed(18)
                                                        .build();

    var split_line = window.innerWidth < 670 ? "<br/>" : ""  

    tw.wait(500).type(' ',function(){
        document.querySelector('#sutd').classList.add('active');
    }).wait(1000)
        .type(' Research Assistant @')
        .wait(900)
        .type(' National University of Singapore ,')
        .wait(900)
        .put(split_line)
        .wait(900)
        .type(' ' + titolo  , function(){
            document.querySelector('body').classList.add('active');
                document.querySelector('.content').classList.add('active');
            setTimeout(play,2000)
        });

    var delete_counter = 0
    titoli.push('Leukemia Survivor')
    function play() {
        tw.wait(50).delete(function(){
            delete_counter = delete_counter + 1
            if (delete_counter < titolo.length) {
                play()
            } else {
                delete_counter = 0
                shuffle(titoli);
                titolo = titoli.shift()
                if (titolo) {
                    tw.wait(900).type('' + titolo, function() {
                        setTimeout(play,10000)
                    })
                } else {
                    titoli = titoli_copy.slice()
                    titolo = "more..."
                    tw.wait(900).type('more...', function() {
                        setTimeout(play,10000)
                    })
                }
            }
        })
    }
});

