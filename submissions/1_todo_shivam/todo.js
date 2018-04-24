var tasks = [];

window.onload = function() {
  // console.log($(''))
  // var todoList = ['Plan My Trip', 'Heyyy'];
  $('#addTask').click(function() {
    tasks.push($('input[name=task]').val())
    $('input[name=task]')[0].value = '';
    console.log(tasks)
    tasks[2] = 'asdasd'
  })

  $('#del').on('click', function() {
    tasks.splice(0, 1);
    console.log(tasks)
  })

  // var list = "<p><strong class='hey'>ss</strong></p>"
  $('ul#todoList').append(list);
  console.log($('#todoList'))
}


function addTolist() {
  var additem = document.getElementById('additem').value;
  todoList.push(additem);

  for (i = 0; i < todoList.length; i++) {
    var newitem = "<a href='#' onClick='removeRecord(" + i + ");'>X</a> " + todoList[i] + " <br>";
  };
  document.getElementById('items').innerHTML += newitem;
}


function removeitem(i) {
  var j = i;


  var tempList = [];


  var newitem = "";
  for (var i = 0; i < itemList.length; i++) {
    if (i != j) {
      tempList.push(todoList[i]);
    }
  }
}
  //Display List
  // todoList = tempList;
  // for (var i = 0; i < todoList.length; i++)
  // {
  // newitem += "<a href='#' onClick='removeRecord(" + i + ");'>X</a> " + todoList[i] + " <br>";
  // };
  // document.getElementById('items').innerHTML = newitem;
  // }
