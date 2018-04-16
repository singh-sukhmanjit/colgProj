window.onload = function() {
  
}

var todoList = ["A,B,C,D"];

function addTolist () {
    var additem = document.getElementById('additem').value;
    todoList.push(additem);

    for (i = 0; i < todoList.length; i++)   {
        var newitem = "<a href='#' onClick='removeRecord(" + i + ");'>X</a> " + todoList[i] + " <br>";
    };
    document.getElementById('items').innerHTML += newitem;
}


function removeitem(i) {
var j = i;


    var tempList = [""];


    var newitem = "";
    for (var i = 0; i < itemList.length; i++)
    {
        if(i != j)
        {



            tempList.push(todoList[i]);
        }
    };

//Display List
    // todoList = tempList;
      // for (var i = 0; i < todoList.length; i++)
      // {
        // newitem += "<a href='#' onClick='removeRecord(" + i + ");'>X</a> " + todoList[i] + " <br>";
    // };
    // document.getElementById('items').innerHTML = newitem;
// }
