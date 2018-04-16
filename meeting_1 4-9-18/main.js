window.onload = () => {
  $('ul li').click(function() {
    console.log($('li').index(this))
  })

  $('input').keyup(function() {
    console.log(this.value)
  })
  var list = (
    [
      '<li>Hi</li>',
    '<li>Hi2</li>',
    '<li>Hi3</li>'
    ]
  );
  // $('ul').append(list);
  var obj = new test();
  obj.fxn();
  $('#btn').on('click', () => {
    console.log($('#btn')[0].innerHTML)
  })
}
function hello(length, breadth) {
  console.log('fxn')
}

var arr = [1, 5, 10]

class test {
  constructor() {}

  fxn() {
    console.log('const')
  }
}
