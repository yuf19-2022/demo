/**
 * 
 * @returns 生成一个随机颜色
 */
function randomColor(){
    return "#"+Math.random().toString(16).substring(2,8).padEnd(6,"0");
}

/**
 * 
 * @param {} len 字符串的长度
 * @returns 生成一个随机字符串 36=\d{10}+[a-z]{26}
 */
function randomString(length){
    return length<=11?Math.random().toString(36).substring(2,2+length).padEnd(length,"0"):randomString(11)+randomString(length-11);
}

/**
 * 
 * @param {*} string 需要转换的字符串
 * @returns 转换成千分位
 */
function toLocaleString(string){
    return string.replace(/\B(?=(\d{3})+$)/g,',');
}

// /**
//  * 深度克隆：使用json.stringify和json.parse的方法实现深度克隆，存在一些问题，比如循环引用，以及无法处理函数
//  * @param {} obj 要深度克隆的对象
//  * @returns 
//  */
// function deepClone(obj){
//     return JSON.parse(JSON.stringify(obj));
// }

/**
 * 深度克隆：使用递归的方法实现深度克隆，不存在循环引用的问题，但是无法处理函数
 * @param {*} obj 
 * @returns 
 */
function deepClone(obj){
    const _catch=new Map();
    function _deepClone(obj){
        if(typeof obj !== "object" || obj === null){
            return obj;
        }
        if(_catch.has(obj)){
            return _catch.get(obj);
        }
        let result = Array.isArray(obj)?[]:{};
        _catch.set(obj,result);
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                result[key] = _deepClone(obj[key]);
            }
        }
        return result;
    }
    return _deepClone(obj);
}

/**
 * 测试
 */
function test(){
    console.log(randomColor());
    console.log(randomString(36));
    console.log(new Number("100000000").toLocaleString())
    console.log(toLocaleString( "100000000"));
    const obj={name:"张三",age:18,address:{city:"北京",street:"朝阳"},array:[1,2,3]};
    obj.obj=obj;
    obj.array.push(obj);
    const cloneObj=deepClone(obj);
    console.log(cloneObj);
    console.log(cloneObj.name===obj.name);
    console.log(cloneObj.address===obj.address);
    console.log(cloneObj.address.city===obj.address.city);
    console.log(cloneObj.obj===obj)
    console.log(cloneObj.obj===cloneObj)
    console.log(cloneObj.array===obj.array);
    console.log(cloneObj.array[0]===obj.array[0]);
    console.log(cloneObj.array[3]===obj);
    console.log(cloneObj.array[3]===cloneObj);
}

test();