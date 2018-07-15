//DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument );
// function sayHello(event)
// {
//     console.log(this);
//     this.textContent = "Said it";
//     var name = document.getElementById("name").value;
//     var msg = "<h2>Hello "+name+"!!</h2>";
//     //console.log(msg);
//     //document.getElementById("content").textContent = msg;
//     document.getElementById("content").innerHTML = msg;

//     if(name === "student")
//     {
//         var title = document.getElementById("title").textContent;
//         title += " & Lovin' it";
//         document.getElementById("title").textContent = title;
//     }
// }

// //Unobstrusive event handling
// document.querySelector("button")
//     .addEventListener("click",sayHello);

//document.querySelector("button").onclick = sayHello;

//Event Handling
// document.addEventListener("DOMContentLoaded",function(event){
//     function sayHello(event)
//     {
//         console.log(this);
//         this.textContent = "Said it";
//         var name = document.getElementById("name").value;
//         var msg = "<h2>Hello "+name+"!!</h2>";
//         //console.log(msg);
//         //document.getElementById("content").textContent = msg;
//         document.getElementById("content").innerHTML = msg;
    
//         if(name === "student")
//         {
//             var title = document.getElementById("title").textContent;
//             title += " & Lovin' it";
//             document.getElementById("title").textContent = title;
//         }
//     }
    
//     //Unobstrusive event handling
//     document.querySelector("button")
//         .addEventListener("click",sayHello);

//         document.querySelector("body")
//         .addEventListener("mousemove",function(event)
//     {
//         if(event.shiftKey === true)
//         {
//         console.log("x : "+event.clientX);
//         console.log("y : "+event.clientY);
//         }
//     });
// });

    //AJAX
    document.addEventListener("DOMContentLoaded",function(event)
{
document.querySelector("button").addEventListener("click",function()
{
    // var self = this;
    // var name = "";
    $ajaxUtil.sendGetRequest("/Data/name.json",function(res)
{
    var msg = "";
    msg += res.firstName + " "+ res.lastName;
    if(res.likesChinFood)
    {
        msg += " likes Chinese food";
    }
    else
    {
        msg += " does not like Chinese food";
    }
    msg += " and uses "+res.nbrOfDis+" number of displayes";

    document.querySelector("#content").innerHTML = "<h2>"+msg+"!!";
});

});
});