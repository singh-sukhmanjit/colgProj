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
    for(i=0;i<a.length;i++){
      if(a[i]==value){
        console.log('available at '+ (i+1) + ' place');
      }
      else{
        console.log(value +' not available');
      }
    }
   $('input[name=search]')[0].value = '';
  })
  $('#edit').on('click', function(){
    var value = $('input[name=edit]').val();
    var newvalue= $('input[name=new]').val();
    for(i=0;i<a.length;i++){
      if(a[i]==value){
        c=a[i];
        a[i]=newvalue;
      }
      else{
        console.log(value +' not available');
      }
      }
      console.log(a);
   $('input[name=edit]')[0].value = '';
   $('input[name=new]')[0].value = '';
  })
}

//function(){
  //for(i=0;i<a.length;i++)}{
  //  if(a[i]==value){
  //    console.log('true');
  //  }
  //}
////