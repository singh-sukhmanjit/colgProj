window.onload = function() {
  var a = [];
  $('#add').on('click', function() {
    var value = $('input[name=add]').val();
    a.push(value)
    $('input[name=add]')[0].value = '';
    console.log(a)
  })
  $('#delete').on('click', function() {
    a.pop();
    console.log(a)
  })

  $('#search').on('click', function(){
    var value = $('input[name=search]').val();
    var z=0;
    for(i=0;i<a.length;i++){
      if(a[i]==value){
        console.log(value + ' available at '+ (i+1) + ' place');
        z=1;
      }
    }
      if(z==0)
      {
        console.log(value +' not available');
      }
   $('input[name=search]')[0].value = '';
  })
  $('#edit').on('click', function(){
    var value = $('input[name=edit]').val();
    var newvalue= $('input[name=new]').val();
    var z=0;
    for(i=0;i<a.length;i++){
      if(a[i]==value){;
        a[i]=newvalue;
        z=1;
      }
      }
      if(z==0)
      {
        console.log(value +' not available');
      }
      console.log(a);
   $('input[name=edit]')[0].value = '';
   $('input[name=new]')[0].value = '';
  })
}
