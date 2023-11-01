//alert(1); -> 만나자마자 불려오기 때문에 화면 전환중인데도 뜬다.
//import {    PLAYERS, MAX_SIZE, add, obj} from "./export.js";
//import * as aa from "./export.js"; // 전체 가져오기
// import {PLAYERS as PL, MAX_SIZE as MS} from "./export.js";

// aa.PLAYERS.forEach(player=>console.log(player));
// console.log(aa.MAX_SIZE);
// console.log(aa.add(3,4));
// console.log(aa.obj);
// PL.forEach(player=>console.log(player));
// console.log(MS);
// console.log(add(3,4));
// console.log(obj);

//export default
import obj from "./export.js";//여기서 바로 {data} 못쓴다
let {data} =obj;
console.log(data);