        //Ajax Program
// (function(global)
// {
//     //Namespace for utitlity
//     var ajaxUtil = {};

//     //Http request object
//     function getRequestObject()
//     {
//         if(window.XMLHttpRequest)
//         {
//             return (new XMLHttpRequest());
//         }
//         //For old IE(Optional)
//         else if(window.ActiveXObject)
//         {
//             return (new ActiveXObject('Microsoft.XMLHTTP'));
//         }
//         else{
//             global.alert("Ajax is not supported");
//             return null;
//         }
//     }

//     //Http Get request
//     ajaxUtil.sendGetRequest=
//     function(url,responseHandler)
//     {
//         var request = getRequestObject();
//         request.onreadystatechange = function()
//         {
//             handlerResponse(request,responseHandler);
//         };
//         request.open("GET",url,true); //true indicates async
//         request.send(null); //Only for POST
//     }
//     function handlerResponse(request,responseHandler)
//     {
//         if((request.readyState == 4) && (request.status == 200))
//         {
//             responseHandler(request);
//         }
//     }
//     global.$ajaxUtil = ajaxUtil;
// })(window);

        //Ajax with Json
(function(global)
{
    //Namespace for utitlity
    var ajaxUtil = {};

    //Http request object
    function getRequestObject()
    {
        if(window.XMLHttpRequest)
        {
            return (new XMLHttpRequest());
        }
        //For old IE(Optional)
        else if(window.ActiveXObject)
        {
            return (new ActiveXObject('Microsoft.XMLHTTP'));
        }
        else{
            global.alert("Ajax is not supported");
            return null;
        }
    }

    //Http Get request
    ajaxUtil.sendGetRequest=
    function(url,responseHandler,isJson)
    {
        var request = getRequestObject();
        request.onreadystatechange = function()
        {
            handlerResponse(request,responseHandler,isJson);
        };
        request.open("GET",url,true); //true indicates async
        request.send(null); //Only for POST
    }
    function handlerResponse(request,responseHandler,isJson)
    {
        if((request.readyState == 4) && (request.status == 200))
        {
            if(isJson == undefined)
            {
                isJson = true;
            }
            if(isJson)
            {
                responseHandler(JSON.parse(request.responseText));
            }
            else
            {
                responseHandler(request.responseText);
            }
            
        }
    }
    global.$ajaxUtil = ajaxUtil;
})(window);