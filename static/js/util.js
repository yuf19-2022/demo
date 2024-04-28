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

/**
 * 测试
 */
function test(){
    console.log(randomColor());
    console.log(randomString(36));
    console.log(new Number("100000000").toLocaleString())
    console.log(toLocaleString( "100000000"));
}

test();