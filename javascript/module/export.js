//named export
//이름을 넘겨준다.
//이름이 여러개라도 된다.
//여러번 export 할 수 있다.

//export default -> 이름을 빼고 준다
//import 하는 쪽은 아무 이름 갖다 써도 된다.
//문서에서 단 하나만 사용할 수 있다. 복수개의 export default 사용 안됨

//전체 선언 후 전체 export
// //export, import
// let PLAYERS = ['손흥민', '이강인', '김민재'];
// const MAX_SIZE=1000;
// function add(n1,n2){
//     return n1+n2;
// }

// var obj={
//     template:`<div?>My HTML Template</div>`,
//     data(){
//         return{
//             num:20
//         }
//     },
//     log:function(){
//         console.log('log() is called');
//     }
// }

// export{    PLAYERS, MAX_SIZE, add, obj}

//개별 선언 후 export
// export let PLAYERS = ['손흥민', '이강인', '김민재'];
// export const MAX_SIZE=1000;


//======= export default
let PLAYERS = ['손흥민', '이강인', '김민재'];
const MAX_SIZE=1000;
function add(n1,n2){
    return n1+n2;
}
export default{//이거 쓰면 밑의 export default는 오류남
    template:`<div?>My HTML Template</div>`,
    data(){
        return{
            num:20
        }
    },
    log:function(){
        console.log('log() is called');
    }
}

//export default{add, MAX_SIZE};//오류!!
//export default{obj};//named export 오류!!
