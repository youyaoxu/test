/*src
	action
		math.js
	constants
		ActionTypes.js
	reducer
		index.js
		math.js
	store
		index.js
	index.js*/

// constants/ActionTypes.js
export const ADD='ADD';
export const SQUARE='SQUARE';
export const SET='SET';

// action/math.js
import {ADD,SQUARE,SET} from '../constants/ActionTypes.js'
export const add=(num)={{type:ADD,num}}
export const square={type:SQUARE}
export const setNum={type:SET,num}

// reducer/math.js
import {ADD,SQUARE} from '../constants/ActionTypes.js'
const math=(state=10,action)=>{
	switch (action.type) {
		case ADD:
			return state+action.num
			break;
		case SQUARE:
			return state*state;
		case SET:
			return action.num;
		default:
			return state;
			break;
	}
}
export default math;

// reducer/index.js
import {combineReducers} from 'redux'
import math from 'math'
const rootReducer=combineReducers({math})
export default rootReducer

// store/index.js
import {createStore} from 'redux'
import rootReducer from '../reducer'
export default createStore(rootReducer)

import store from './store'
import {add,square} from './action/math'
console.log(store.getState())//默认值为10


store.dispatch(add(1))//发起+1 action
console.log(store.getState())//当前值为10+1=11

store.dispatch(square)//发起+1 action
console.log(store.getState())//当前值为11*11=121

store.dispatch(add(2))//发起+1 action
console.log(store.getState())//当前值为121+2=123

// UI
import store from './store'
import React from 'react'
import ReactDOM from 'react-dom'
import {add,square} from './action/math'
ReactDOM.render(
	`<div store={store}>
		<p>{store.getState().math}</p>
		<input type='button' onClick={axios.get(url).then(res=>{
			store.dispatch(store.dispatch(setNum(res.data.id)))
		})} value='+1' />
		<input type='button' onClick={()=>store.dispatch(add(1))} value='+1' />
		<input type='button' onClick={()=>store.dispatch(add(1))} value='+2' />
		<input type='button' onClick={()=>store.dispatch(square} value='乘方' />
	</div>`,
	documen.getElementById('root')
)


// 使用异步
// npm install --save redux-thunk
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducer'

// action/math.js
import {ADD,SQUARE,SET} from '../constants/ActionTypes.js'
import axios from 'axios'
const url='https://jsonplaceholder.typicode.com/posts/2'
export const add=(num)={{type:ADD,num}}
export const square={type:SQUARE}
export const setNum=()=>(dispatch,getState)=>{
	return axios.get(url).then(res=>{
		dispatch({
			type:SET,
			num:res.data.id
		})
	})
}


// 提示信息
// action/fetch.js
import {SET_FETCH_MESSAGW,HIDE_FETCH_MESSAGE} from '../constants/ActionTypes.js'
export const startFetch={type:SET_FETCH_MESSAGW,message:'成功接收数据'}
export const successFetch={type:SET_FETCH_MESSAGW,message:'开始发送请求'}
export const failFetch={type:SET_FETCH_MESSAGW,message:'成功接收数据'}
export const hideFetchMessage={type:HIDE_FETCH_MESSAGE}

// action/math.js
import {ADD,SQUARE,SET} from '../constants/ActionTypes.js'
import {startFetch,successFetch,failFetch,hideFetchMessage} from '../fetch.js'
import axios from 'axios'
const url='https://jsonplaceholder.typicode.com/posts/2'
export const add=(num)={{type:ADD,num}}
export const square={type:SQUARE}
export const setNum=()=>(dispatch,getState)=>{
	dispatch(startFetch)
	setTimeout(()=>{
		dispatch(hideFetchMessage)
	})
	return axios.get(url).then(res=>{
		setTimeout(()=>{
			dispatch(successFetch)
		},500)
		dispatch({type:SET,num:res.data.id})
	}).catch(err=>{
		dispatch(failFetch)
		setTimeout(()=>{
			dispatch(hideFetchMessage)
		})
	})
}
// constants/ActionTypes.js
export const ADD='ADD';
export const SQUARE='SQUARE';
export const SET='SET';
export const SET_FETCH_MESSAGW='SET_FETCH_MESSAGW';
export const HIDE_FETCH_MESSAGE='HIDE_FETCH_MESSAGE';

// reduc/fetch.js
import {SET_FETCH_MESSAGW,HIDE_FETCH_MESSAGE} from '../constants/ActionTtpes.js'
const initState={
	message:'',
	isShow:false
}
const fetch=(state=initState,action)=>{
	switch (action.type) {
		case SET_FETCH_MESSAGW:
			return {isShow:true,message:action.message}
			break;
		case HIDE_FETCH_MESSAGE:
			return {isShow:false,message:''}
			break;
		default:
			return state;
			break;
	}
}
export default fetch;

// index.js
import store from './store'
import React from 'react'
import ReactDOM from 'react-dom'
import {add,square} from './action/math'
ReactDOM.render(
	`<div store={store}>
		<p>{store.getState().math}</p>
		<input type='button' onClick={axios.get(url).then(res=>{
			store.dispatch(store.dispatch(setNum(res.data.id)))
		})} value='+1' />
		<input type='button' onClick={()=>store.dispatch(add(1))} value='+1' />
		<input type='button' onClick={()=>store.dispatch(add(1))} value='+2' />
		<input type='button' onClick={()=>store.dispatch(square} value='乘方' />
		{store.getState().fetch.isShow && <p>{store.getState().fetch.message}</p>}
	</div>`,
	documen.getElementById('root')
)

// react-redux
// 展示组件和容器组件
// 展示组件:只负责UI呈现,所有数据由参数props提供
// 容器组件:负责管理数据和业务逻辑,带有内部状态,可使用redux的API

// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import store from 'store'
import MathContainer from './constants/MathContainer'
import {Provider} from 'react-redux'
ReactDOM.render(
	`<Provider>
		<MathContainer />
	</Provider>`,
	document.getElementById('root')
)


// MathContainer
import {connect} from 'react-redux'
const MathContainer=connect(
	mapStateToProps,
	mapDispatchToProps
)(Math)

const mapStateToProps=(state)=>{
	return {
		num:getNum(state)
	}
}
const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onSetNumClick:()=>dispatch(setNum())
	}
}


// 最终项目结构
/*
src
	actions
		fetch.js
		math.js
	components
		Math.js
	constants
		ActionTypes.js
	containers
		MathContainer.js
	reducers
		fetch.js
		index.js
		math.js
	selectors
		fetch.js
		math.js
	index.js
	store.js
*/

// components/Math.js
import React from 'react' 
const Math=({
	num,
	isShow,
	fetchMessage,
	onSetNumClick,
	onAddOneClick,
	onAddTwoClick,
	onSquareClick
})=>(
	`<section>
		<p>{num}</p>
		<input type='button' onClick={onSetNumClick} value='设置Num' />
		<input type='button' onClick={onAddOneClick} value='+1' />
		<input type='button' onClick={onAddTwoClick} value='+2' />
		<input type='button' onClick={onSquareClick} value='乘方' />
	</section>`
)
export default Math;

// containers/MathContainer.js
import {connect} from 'react-redux'
import Math from '../components/Math'
import {getNum} from '../selectots/math'
import {getFetchMessage,getFetchShow} from '../selectors/fetch'
import {setNum,add,square} from '../actions/math'
const mapStateToProps=state=>{
	return {
		num:getNum(state),
		fetchMessage:getFetchMessage(state),
		isShow:getFetchShow(state)
	}
}
const mapDispatchToProps={
	onSetNumClick:()=>setNum(),
	onAddOneClick:()=>add(1),
	onAddTwoClick:()=>add(2),
	onSquareClick:()=>square
}
const MathContainer=connect(mapStateToProps,mapDispatchToProps)(Math)
export default MathContainer

// actions
import {SET_FETCH_MESSAGE,HIDE_FETCH_MESSAGE} from '../constants/ActionTypes.js'
export const startFetch={type:SET_FETCH_MESSAGE,message:'开始发送异步请求'}
export const successFetch={type:SET_FETCH_MESSAGE,message:'开始发送请求'}
export const failFetch={type:SET_FETCH_MESSAGW,message:'成功接收数据'}
export const hideFetchMessage={type:HIDE_FETCH_MESSAGE}

// actions/math.js
import {ADD,SQUARE,SET} from '../constants/ActionTypes.js'
import {startFetch,successFetch,failFetch,hideFetchMessage} from './fetch'
import axios from 'axios'
const uri = 'https://jsonplaceholder.typicode.com/posts/2'
export const add = num => ({ type: ADD, num })
export const square = { type: SQUARE }
export const setNum=()=>(dispatch,getState)=>{
	dispatch(startFetch)
	setTimeout(()=>{dispatch(hideFetchMessage),300})
	return axios.get(url).then(res=>{
		dispatch(successFetch)
		setTimeout(()=>{dispatch(hideFetchMessage)},300)
		dispatch({type:SET,num:res.data.id})
	}).catch(err=>{
		dispatch(failFetch)
		setTimeout(()=>{dispatch(hideFetchMessage)},300)
	})
}

// constants/ActionTypes.js
export const ADD='ADD'
export const SET='SET'
export const SQUARE='SQUARE'
export const SET_FETCH_MESSAGE='SET_FETCH_MESSAGE'
export const HIDE_FETCH_MESSAGE='HIDE_FETCH_MESSAGE'

// reducer/fetch.js
import {} from '../constants/ActionTypes.js'
const initState={
	message:'',
	isShow:false
}
const fetch=(state=initState,action)=>{
	switch (action.type) {
		case SET_FETCH_MESSAGE:
			return {isShow:true,message:action.message}
			break;
		case HIDE_FETCH_MESSAGE:
			return {isShow:false}
			break;
		default:
			return false;
			break;
	}
}
export default fetch;

// reducers/index.js
import {combineReducers} from 'redux'
import math from './math'
import fetch from './fetch'
const rootReducer=combineReducers({
	math,
	fetch
})
export default rootReducer;

// reduces/math.js
import {ADD,SQUARE,SET} from '../constants/ActionTypes.js'
const math=(state=10,action){
	switch (action.type) {
		case ADD:
			return state+action.num
			break;
		case SQUARE:
			return state+state
			break;
		case SET:
			return action.num
			break;
		default:
			return state
			break;
	}
}
export default math;

// selectors/fetch.js
export const getFetchMessage=state=>state.fetch.message;
export const getFetchIsShow=state=>state.fetch.isShow;

// selectors/math.js
export const getNum=state=>state.num

// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import MathContainer from './containers/MathContainer'
import {Provider} from 'react-redux'
ReactDOM.render(
	`<Provider><MathContainer></Provider>`,
	document.getElementById('root')
)

// store.js
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reduces'
export default createStore(rootReducer,applyMiddleware(thunk))