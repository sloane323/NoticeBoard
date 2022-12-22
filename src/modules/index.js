// 작성한 리덕스 모듈들을 하나로 묶어서 사용
// 및 내보내기
import {combineReducers} from "redux"
// 리덕스 모듈 연결

import board from "./borad"

const rootReducer = combineReducers({
    board
})
export default rootReducer