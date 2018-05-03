class Danish
{
constructer(private _x?:number,private _y?:number){}
 show() {
   document.write("X: "+this._x+" Y: "+this._y)
 }
}
var a= new Danish();
a._x=1;
a._y=2;
a.show();
