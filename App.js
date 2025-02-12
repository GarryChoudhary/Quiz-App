let Questions=[
    //   {question:"What is h1 in HTML",options:["Hyper Transfer Markup Language","Hyper Text Markup Language","High Tech Markup Language","Hyperlink Text Managing Language"],answers:"Hyper Text Markup Language"},
      {question:"Which HTML tag is used to define a paragraph?",options:["para","p","paragraph","text"],answers:"p"},
      {question:"Which tag is used to create a hyperlink in HTML?",options:["url","href","a","link"],answers:"link"},
      {question:"What is the correct way to create a comment in HTML?",options:["# This is a comment","/* This is a comment */","// This is a comment","!-- This is a comment --"],answers:"// This is a comment"},
      {question:"Which attribute is used to specify an image source in HTML?",options:["alt","link","href","src"],answers:"src"},
      {question:"Which tag is used to define the largest heading in HTML?",options:["h6","h1","heading","head"],answers:"h1"},
      {question:"Which HTML tag is used to create a line break?",options:["lb","br","break","line"],answers:"br"},
      {question:"Which attribute is used to provide alternative text for an image?",options:["alt","src","title","href"],answers:"alt"},
      {question:"Which tag is used to create an ordered list?",options:["ul","li","ol","list"],answers:"ol"},
      {question:"Which tag is used to create a checkbox in HTML?",options:["input type=checkbox","checkbox","input type=check","tickbox"],answers:"input type=checkbox"},
    ];
    let count=1;
    let questionsIndex=0;
    function OnNext() {
        if(questionsIndex<Questions.length){
            count++;
            document.getElementById("QuestionNo").innerHTML=`Question:${count}/10`;
            document.getElementById("Question").innerHTML=`${Questions[`${questionsIndex}`].question}`;
            document.getElementById("button1").innerHTML=`${Questions[`${questionsIndex}`].options[0]}`;
            document.getElementById("button2").innerHTML=`${Questions[`${questionsIndex}`].options[1]}`;
            document.getElementById("button3").innerHTML=`${Questions[`${questionsIndex}`].options[2]}`;
            document.getElementById("button4").innerHTML=`${Questions[`${questionsIndex}`].options[3]}`;

            document.getElementById("button1").style.backgroundColor = "";
            document.getElementById("button2").style.backgroundColor = "";
            document.getElementById("button3").style.backgroundColor = "";
            document.getElementById("button4").style.backgroundColor = "";
            document.getElementById("button1").disabled = false;
            document.getElementById("button2").disabled = false;
            document.getElementById("button3").disabled = false;
            document.getElementById("button4").disabled = false;

            questionsIndex++; 
        }else if(questionsIndex==Questions.length){
            document.getElementById("skip").innerHTML="submit";
            document.querySelector('#Main-container').innerHTML = `<h2 style="margin:70px">Quiz Complete!</h2>`;

        };
    };
    function OnQuit(){
        document.querySelector('#Main-container').innerHTML = `<h2 style="margin:70px">Quiz incomplete! Please Complete the Quiz</h2>`;
    };

    // let Button = document.getElementById("button1");

    let score=1;
    function checkAnswer(selectedButton) {
         let correctAnswer = Questions[questionsIndex - 1].answers; // Get correct answer

         document.getElementById("button1").disabled = true;
         document.getElementById("button2").disabled = true;
         document.getElementById("button3").disabled = true;
         document.getElementById("button4").disabled = true;

         if (selectedButton.innerHTML === correctAnswer) {
           selectedButton.style.backgroundColor = "green"; // Correct answer
           document.getElementById("score").innerHTML=`score: ${score++}`;
        //    document.getElementById("button1").disabled = true;

         } else {
                   selectedButton.style.backgroundColor = "red"; // Wrong answer
                }
};