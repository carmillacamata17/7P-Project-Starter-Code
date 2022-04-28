$("button").click(function(){
 let variable1 =$(".J").val();   
 let variable2 =$(".M").val();   
 let variable3 =$(".K").val();

 let variable4= variable2 *365*28;
    $(".fortune-display").append(variable1+ " you will sleep "+ variable4+" hours by 2050 ");
    console.log(variable1);
 console.log(variable2);
console.log(variable3);
});     