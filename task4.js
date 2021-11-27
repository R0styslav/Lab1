function mode(array)
{
    if(array.length == 0)
        return "Array is empty";
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
var arrNum = [1,3,4,5,6,2,3,3,3];
var arrStr = ["dog", "cat", "mouse","tiger","cat"]
console.log(mode(arrNum));