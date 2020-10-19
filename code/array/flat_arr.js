let ary = [1, [[2], 3, 4], 5];

// 暴力法
/*function *gt (ary) {
  if (ary.length === 0) return undefined;
  let newAry = ary.join(',').split(',');
  for (var i = 0; i < newAry.length; i++) {
    yield Number(newAry[i]);
  }
}


let g = gt(ary);
let result = g.next();
while(!result.done){
  console.log(result.value);
  result = g.next();
}*/


// 递归法
function *flatten2 (arr) {
  for(let item of arr) {
    Array.isArray(item) ? yield *flatten2(item) : yield item
  }
}