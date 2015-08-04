var help = ["The most commonly used commands are:", "clear", "clear screen", "theme [color]", "change background color", "about", "display information about me!", "github", "checkout the repository", "linkedin", "go to my linkedin profile", "dragon", "start dragon quest",
          ];

var dragonHelp = ["The most commonly used commands are:", "draw sword", "sign up to play the game!", "clear", "clear screen", "quit", "exit to home page", "login", "log into your game", "play", "jump into the game if already logged in", "logout", "log out of the game", "delete", "delete your account", "restart", "resets the game (in game)", "back", "goes back to the last question, down to the first (in game)",
        ];

var intro = [
      [
       "", "Drawing your sword was a bold move. The dragon feels threatened! It launches at you with fiery breath and sharp pointies.", "What do you do?", "[a] blindly swing your to the dragon's throat", "[b] run away!!", "[c] pray for mercy"
      ].join('\n'),
      ["Eyes full of tears you drop the sword and beg the dragon not to eat you. 'Please mighty dragon, you don't want to eat me, I'm just a programmer, I probably taste horrible'", "Surprised, the dragon stops! He stares at you and with a deep voice he asks:"
      ].join('\n'),
    ];

var quest = [
        [ "After a long pause, the dragon speaks: 'Ok... if you're telling the truth, then you would have no problem solving this problem:<br>", "var a = [1,2,3,4,5];", "function b(arr) {return arr.map(function(e){return --e})};<br>", "console.log(b(a));<br>", "What is printed in the console?<br>",
      ].join('\n'),
        [ "What about this one?!<br>", "var a = function(n) {(n^3) + 3 === 11 ? n - 2 : n }<br>", "console.log(a(2));<br>", "What is printed in the console?<br>",
      ].join('\n'),
        ["That was too easy, what can you solve this?<br>", "var myArr = ['foo', 'bar'];", "myArr.length = 0;", "myArr.push('fizz');", "console.log(myArr);", "", "What is printed in the console?"
      ].join('\n'),
       [ "Splendid! I am starting to believe you. Perhaps you can help me with my website. But first, one last test:<br>", "var myObj= {'a': 'b', 'c': ['d', {'e': 'f'}, ['g', 'h']], 'i': {'j': 'k'}}<br>", "console.log(myObj.c[2]['g'])<br>", "What is printed in the console?<br>",
      ].join('\n'),
       ["So I have this function that I use for my ingredients:<br>", "function push(i,j,k,l) {", "&nbsp;var values = [];", "&nbsp;myBlock: {", "&nbsp;values.push(i);", "&nbsp;values.push(j);", "&nbsp;break myBlock;", "&nbsp;values.push(k);", "&nbsp;}", "&nbsp;values.push(i);", "&nbsp;return values.join(', ');", "}<br>", "What is printed when I console.log(push('salt','human eyes','lavender','lime'))?<br>",
      ].join('\n'),
      ["You earned the dragon's trust! You later helped him with his cooking website and it looks gorgeous!", "The dragon spares your life and you two become besties and eat delicioius food.<br>",  "type dragon website to view",
      ].join('\n'),
    ];

var about = "Hello, my name is Roberto Ortega. I'm a full-stack developer.<br><br> This is my terminal website. Type help to view a list of commands.<br>You can learn more about me, check out my portfolio, find me on linkedIn, and much more!<br> Play around, you can contact me at berto.ort@gmail.com."
