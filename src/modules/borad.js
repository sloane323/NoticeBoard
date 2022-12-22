// board 리듀서
//초기 값
const initalState = [
    {
        boardId :1, 
        userEmail : "hjseong1222@naver.com", 
        title : "첫 게시물입니다",
        content : "문자만들어갈수 있는 공간입니다",
        view : 0,
        like : 1 
        // 좋아요를 누른 사람의 리스트
    },
    {
        boardId : 2, 
        userEmail : "k36801377@gmail.com", 
        title : "두번째 게시글",
        content : "수정할수있습니다.",
        view : 0,
        like : 1 
        // 좋아요를 누른 사람의 리스트
    },
    {
        boardId : 3, 
        userEmail : "k36801377@gmail.com", 
        title : "세번째 게시물",
        content : "헤이요~.",
        view : 0,
        like : 1 
        // 좋아요를 누른 사람의 리스트
    }
]
// board가 증가할때마다 증가되는 아이디
let boardId = 3;


//리듀서 함수
function board (state = initalState, action) {
    switch (action.type) {
        case "deleteBoard":
            // 현재 게시물의 id 를 찾아서, 그 id를 제외하고
            // 새로운 배열을 만듦 : filter
            const newboardList = state.filter((board)=>( board.boardId != action.payload ));
            return newboardList;
        case "modifyBoard":
            const modifyboard = state.map(
                (board) => 
                (board.boardId == action.payload.boardId? action.payload : board)
                )
            return modifyboard;
        default :
            return state;
    }
}

// 액션함수
export const deleteBoard 
        = (id) => ({type:"deleteBoard", payload:id});
export const modifyBoard
        = (board) =>({type:"modifyBoard", payload:board})


export default board;