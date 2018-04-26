var raghav = {
  name: 'Sukhman',
  rollNo: 50,
  address: 'Sirhind',
  obj: {
    child: 'value',
    another: {

    }
  }
}

var obj = {
  name: 'Danish',
  rNO: 465456,
  another: {
    asda: 'a'
  }
}

var a = [{},{},{}]

var arr = [
  {
    name: 'Sukhman',
    branch: 'CSE',
    href: 'http://www.google.com'
  },
  {
    name: 'Harneet',
    branch: 'CSE',
    another: {
      a: 'ADSd'
    },
    href: 'http://www.google.com'
  },
  {
    name: 'Raghav',
    branch: 'CSE',
    href: 'http://www.google.com'
  },
  {
    name: 'Shivam',
    branch: 'CSE',
    href: 'http://www.facebook.com'
  },
  {
    name: 'Danish',
    branch: 'CSE',
    href: 'http://www.google.com'
  }
]

var listData = [
  {
    inputValue: 'Go To Gym',
    href: 'http://www.google.com'
  }, {
    inputValue: 'Meeeting With Client',
    href: 'http://www.google.com'
  }, {
    inputValue: 'Call Mom',
    href: 'http://www.google.com'
  }, {
    inputValue: 'Plan My Trip',
    href: 'http://www.google.com'
  }
]

function renderList() {
  var list = '';
  listData.forEach((item, index) => {
    list += (
      '<li class="list-group-item">' +
      `<input name=list value=${item.inputValue} type="checkbox">` + ' ' + item.inputValue +
        `<button class="btnn del-btn" data-index=${index}> delete </button>` +
      '</li>')
  })
  $('ul#todoList').html(list);

  $('.del-btn').on('click', function() {
    let delIndex = $(this).data().index;
    listData.splice(delIndex, 1);
    renderList();
  })
}

window.onload = function() {
  renderList();
  var data = '';

  arr.forEach((item, index) => {
    console.log(item.name)
    data += (
      '<li>' + item.name + '</li>' +
      `<a href=${item.href}>${item.name}</a>`
    )
    console.log(data)
  })

  $('#test').html(data)

  $('#addTask').click(function() {
    let newItem = {
      inputValue: $('input[name=task]').val(),
      href: 'http://www.google.com'
    }
    listData.push(newItem)
    $('input[name=task]')[0].value = '';
    renderList();
  })
}
