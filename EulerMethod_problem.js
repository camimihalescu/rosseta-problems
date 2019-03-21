function coolingDown(tR, y0)
{
    var cooling= -0.07*(y0-tR);
    console.log(cooling);
}
coolingDown(20, 100);

function eulerMethod(f, t, y, h, n){
    for(let i=0;i<n;i++){
        var y[0]=100;
        var t[0]=0;
        y[i+1]=y[i]+h*cooling;
        t[i+1]=t[i]+h;
    }
    return y;
}
eulerMethod(coolingDown, 0, 100, 10, 100);





