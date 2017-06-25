var arr = ['The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking. -Albert Einstein','Change is inevitable. Change is constant. -Benjamin Disraeli','Any change, even a change for the better, is always accompanied by drawbacks and discomforts. -Arnold Bennett','When you are finished changing, you are finished. -Benjamin Franklin','If you dont like change, you will like irrelevance even less. -General Eric Shinseki','Change before you have to. -Jack Welch','People can cry much easier than they can change. -James Baldwin','Be the change that you wish to see in the world. -Mahatma Gandhi','I alone cannot change the world, but I can cast a stone across the waters to create many ripples. -Mother Teresa','Change your thoughts and you change your world. -Norman Vincent Peale','People dont resist change. They resist being changed. -Peter Senge'];
$(document).ready(function(){
  $('button').click(function(){
           $('#p1').html(arr[Math.floor(Math.random() * arr.length)]).addClass('p');
           
});
});