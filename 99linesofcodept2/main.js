document.addEventListener("DOMContentLoaded", function(){

    var heading = document.getElementById('heading');
    heading.style.color = 'blue';


    //declare friends and song count down

    //Button for exec
    var button = document.getElementById('button');

    button.addEventListener('click', function(){

        var friends = ["Pedro","Kyle","Shantal","Shane","Andrew"];

        //for loop for friends
        for (var i = 0; i < friends.length ; i++){
                // console.log(" " + friends[i]);

                var div = document.createElement('div');//create div 
                var friend = document.createElement('h3');      //create h3          
                friend.innerHTML = friends[i];
                div.appendChild(friend);
                document.body.appendChild(div);
                
                //p.innerHTML = ;
               // p.appendChild();

                var lines = 99;

            //while loop for countdown

            while (lines > 1){
                var p = document.createElement('p');                
                var sentence = lines+" lines of code in the file, "+lines+" lines of code "+friends[i]+" strikes one out clears it all out "+lines+" lines of code in the file "; 
                p.innerHTML = sentence;
                div.appendChild(p);
                lines--;
            }
            //if loop for "no more" line

            if (lines === 1 ){
             var sentence = lines+" lines of code in the file, "+lines+" lines of code "+friends[i]+" strikes one out clears it all out no more lines of code in the file "; 
             p.innerHTML = sentence;
             div.appendChild(p);
             lines--;

            }

        }
        
    })

})