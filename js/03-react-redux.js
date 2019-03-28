function createStore(state,stateChanger){
	const listeners=[];
	const subscribe=(listener)=>listeners.push(listener);
	const getState=()=>state;
	const dispatch=(action)=>{
		state=stateChanger(state,action)//覆盖原方法
		listeners.forEach((listener)=>listener())
	}
	return {getState,dispatch,subscribe};
}

// 使用方式
let appState={
	title:{
		text:'Vue',
		color:'red'
	},
	content:{
		text:'Angular',
		color:'blue'
	}
}

function stateChanger(state,action){
	switch(action.type){
		case 'UPDATE_TITLE_TEXT':
			return {
				...state,
				title:{
					...state.title,
					text:action.text
				}
			}
		case 'UPDATE_TITLE_COLOR':
			return {
				...state,
				title:{
					...state.title,
					color:action.color
				}
			}
		default:
			return state
	}
}
const store=createStore(appState,stateChanger)

function createStore(reducer){
	let state=null;
	const listeners=[];
	const subscribe=(listener)=>listeners.push(listener);
	const getState=()=>state
	const dispatch=(action)=>{
		state=reducer(state,action)
		listeners.forEach((listener)=>listener())
	}
	dispatch({})
	return {getState,dispatch,subscribe}
}

function themeReducer(state,action){
	if (!state) return{
		themeName:'red theme',
		themeColor:'red'
	}
	switch(action.type){
		case 'UPDATE_TITLE_NAME':
			return {...state,themeName:action.themeColor};
		case 'UPDATE_TITLE_COLOR':
			return {...state,themeName:action.themeColor};
		default:
			return state
	}
}

// 在react中使用代码如下
// 定义一个reducer
function reducer(state,action){
	// 初始化state和switch case
}
// 生成store
const store=createStore(reducer) 
// 监听数据变化重新渲染页面
store.subscribe(()=>renderApp(store.getState()))
// 首次渲染页面
renderApp(store.getState())
// 后面可以随意dispatch,页面自动更新
store.dispatch()


import React,{Component} from 'react'
import PropTypes



