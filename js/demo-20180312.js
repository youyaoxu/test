// 数据监听
//初始化数据监听
initView:function(){
	var _this=this;
	if(_this.noWatch!==true){
		//noWatch不存在
		_this.observer(_this.data);
	}else if(_this.watch){
		// 初始化监听,
		_this.watchData(_this.data,_this.watch)
	}
	if(window.doT && _this.element){
		_this.element.innerHTML='';
		_this.compile();
		document.getElementById(_this.el).className=document.getElementById(_this.el).className+' show';
	}
	for(var k in _this.methods){
		_this[k]=_this.methods[k]
	}
	_this.created.call(_this);
},
// 刷新模板
compile:function(){
	var parseHTML=doT.template(this.template)(this.data);
	document.getElementById(this.el).innerHTML=parseHTML;
	// api.parseMode();
	// this.setPagePadding();
	this.noCompile=false;//没有被编译
	// this.iosCode();
},
setData:function(data){
	if(!data || (data instanceof Object)){
		return;
	}
	this.noCompile=true;
	this.data=this.assign(this.assign({},this,data),data);
	if(this.noWatch!==true){
		//noWatch不存在
		this.observer(this.data)
	}else if(this.watch){
		this.watchData(this.data.this.watch)
	}
	this.compile()
},
observer:function(data){
	var _this=this;
	if(!data || (data instanceof Object)){
		return
	}
	for(var k in data){
		var k=data[k]
		if(_this.noWatch && (typeof _this.noWatch)=='object' && _this.noWatch.indexOf(k)!=-1){
			continue;
		}
		_this.defineProperty(data,k,val)
	}
},
watchData:function(data,watchD){
	var _this=this;
	if(!data || (data instanceof Object)){
		return;
	}
	for(var k in watchD){
		var val=watchD[k];
		observer(data,k,val)
	}
	function observer(data,k,val){
		Object.defineProperty(data,key){
			get:function(){
				return value;
			},
			set:function(v){
				if(value==v){return}
				var oldV=value;
				value=v;
				_this.watch[key].call(_this,v,oldV);
			}
		}
	}
},
defineProperty:function(data,key,val){
	var _this=this;
	Object.defineProperty(data,key,{
		get:function(){
			return value;
		},
		set:function(v){
			if(v==val){return}
			var oldV=val;
			val=v;
			if(!this.noCompile){
				_this.compile()
			}
			if(_this.watch && _this.watch[key]){
				_this.watch[key].call(_this,val,oldV);
			}
		}
	})
},

// var obj={}
// var value;
// Object.defineProperty(obj,'a',{
// 	set:function(v){
// 		value=v;
// 	},
// 	get:function(){
// 		return value;
// 	}
// })
// console.log(obj.a)

//所谓的属性监听就是使用Object.defineProperty()方法定义的属性,该属性设置或者读取可以被监听
// 数据监听分为三种情况:1.data中数据,2.watch中数据,3.noWatch中数据
// 1.data中数据,处理方式是先监听,然后通过setData直接设置
// 2.noWatch中数据不做处理
// 3.watch中数据通过call方法做处理

(function(){
	onReady:function(){
		var _this=this;
		this.apiReady(function(callback){
			if(callback){
				callback.call(_this)
			}
		})
	},
	apiReady:function(){
		var _this=this;
		window.apiReady(function(callback){
			if(callback){
				callback.call(_this)
			}
		})
	},
	getPrefs:function(key){
		return api.getPrefs({
			sync:true,
			key:key
		})
	},
	setPrefs:function(key,val){
		return api.setPrefs({
			sync:true,
			key:key,
			val:val
		})
	},
	init:function(options){
		var _this=this;
		options=options||{};
		this.el=options.el||'app';
		this.data=options.data||{};
		this.noWatch=options.noWatch||false;
		this.watch=options.watch||false;
		this.element=document.getElementById(this.el)
		this.created=options.created||(function(){})
		this.methods=options.methods||{};
		this.safeArea='';
		if(!window.Vue && document.getElementById(this.el)){
			this.template=document.getElementById(this.el).innerHTML.replace(/&amp;&amp;/g,'&&').replace(/&gt;/g,'>').replace(/&lt;/g,'<')
		}
		_this.onReady(function(){
			_this.setPagePadding()
			_this.safeArea=_this.getPrefs('safeArea')||api.safeArea;
			_this.params=api.pageParams;
			_this.CONFIG=_this.getPrefs('CONFIG')||{};
			_this.data.CONFIG=_this.CONFIG;
			if(options && typeof options==='object' options instanceof Object){
				if(window.Vue && _this.el){
					_this.createVue()
				}else{
					_this.initView()
					if(!window.doT){
						new Error('doT不存在')
					}
					if(!window.element){
						new Error('element不存在')
					}
				}
			}else if(typeof options=='function'){
				if(window.ts){
					window.ts(_this);
				}
				// 兼容原来写法
				options.call(_this)
			}
		})
	},
	setPagePadding:function(){
		var _this=this;
		try{
			_this.safeArea=_this.getPrefs('safeArea')||api.safeArea;
		}catch(err){
			_this.safeArea={
				top:20,
				bottom:0
			}
		}
		var header=document.getElementsByClassName('header')
		if(header && header.length>0){
			for(var i=0,len=header.length;i<len;i++){
				var d=header[i];
				d.style.paddingTop=_this.safeArea.top + 'px';
			}
		}
		var footer=document.getElementById('footer')
		if(footer){
			footer.style.paddingBottom=_this.safeArea.bottom + 'px';
		}
		var footer_holder=document.getElementsByClassName('footer-holder')
		if(footer_holder){
			for(var i=0,len=footer_holder.length;i<len;i++){
				var d=footer_holder[i];
				d.style.paddingBottom=_this.safeArea.bottom + 'px';
			}
		}
		// 适配iphoneX
		var pro_edit_holder=document.getElementsByClassName('pro-edit-holder')
		if(pro_edit_holder && pro_edit_holder.length>0){
			for(var i=0,len=pro_edit_holder.length;i<len;i++){
				var d=pro_edit_holder[i];
				d.style.paddingBottom=_this.safeArea.bottom + 'px';
			}
		}
	},
	offset:function(el){
		if(!el) return;
		var sl=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)
		var sT=Math.max(document.documentElement.scrollTop,document.body.scrollTop)
		var rect=el.getBoundingClientRect();
		return {
			l:rect.left+sl,
			t:rect.top+st,
			w:el.offsetWidth,
			h:el.offsetHeight
		}
	},
	extend:function(obj){
		if(!obj && (obj instanceof Object)){
			return
		}
		for(var key in obj){
			this[k]=obj[k];
		}
	},
	iosCode:function(){
		var systemType=api.systemType,
			_this=this;
		if(systemType=='ios'){
			var eleX=document.getElementsByClassName('scroll-x'),
				eleY=document.getElementsByClassName('scroll-y')
			for(var i=0,len=eleX.length;i<len;i++){
				_this.addClass(elesX[i],'scroll-touch')
			}
			for(var i=0,len=eleY.length;i<len;i++){
				_this.addClass(eleY[i],'scroll-touch')
			}
		}
	}
})()


import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Header extends Component{
	render(){
		return (
			<div>
				<h1>React小书<h1>
			</div>
		)
	}
}
ReactDOM.render(<Header />,document.getElementById('app'))

{
	tag:'div',
	attrs:{className:'box',id:'content'},
	children:[
		{
			tag:'div',
			attrs:{className:'title'},
			children:['hello']
		}
	]
}

render(){
	const isGoodWord=true;
	return (
		<div>
			<h1>
				React小书
				{
					isGoodWord?<strong>is good</strong>:null
				}
			</h1>
		</div>
	)
}

class Title extend Component{
	render(){
		return (
			<div>
				<h1>React小书<h1>
			</div>
		)
	}
}
class Header extend Component{
	render(){
		return (
			<div>
				<Title />
			</div>
		)
	}
}

class Title extend Component{
	handleClickOnTitle(word,e){
		console,log(this,word,e.target.innerHTML);
	}
	render(){
		return (
			<h1 onClick={this.handleClickOnTitle.bind(this,'word')}></h1>
		)
	}
}

handleClickOnTitle(){
	this.setState((prevState)=>{
		return {count:0}
	})
	this.setState((prevState)=>{
		return {count:prevState.count+1}
	})
	this.setState((prevState)=>{
		return {count:prevState.count+3}
	})
	console.log(this.state.count)
}

class LikeButton extends Component{
	constructor(){
		super()
		this.state={isLiked:false}
	}
	handleClickOnTitle(){
		this.setState({
			isLikeed:!this.state.isLiked
		})
	}
	render(){
		var wordings=this.props.wordings||{likeText:'取消',unLikeText:'点赞'}
		return (
			<button onCLick={this.handleClickOnTitle.bind(this)}>{this.state.isLiked?wordings.likeText:wordings.unLikeText}</button>
		)
	}
}
class Index extends Component{
	render(){
		return (
			<div><LikeButton wordings={{likeText:'已赞',unLikeText:'赞'}} onClick={()=>{console.log('Click on like button!')}}></LikeButton></div>
		)
	}
}

class LikeButton extends Component{
	static defaultProps={
		likeText:'取消',
		unLikeText:'点赞'
	}
	constructor(){
		super()
		this.state={isLiked:false}
	}
	handleClickOnTitle(){
		this.setState({
			isLikeed:!this.state.isLiked
		})
	}
	render(){
		return (
			<button onCLick={this.handleClickOnTitle.bind(this)}>{this.state.isLiked?wordings.likeText:wordings.unLikeText}</button>
		)
	}
}
class Index extends Component{
	render(){
		return (
			<div><LikeButton wordings={{likeText:'已赞',unLikeText:'赞'}} onClick={()=>{console.log('Click on like button!')}}></LikeButton></div>
		)
	}
}


没有state的组件叫无状态组件
state是让组件控制自己的状态,props是让外部对组件自己进行配置
尽量少用state多用props


const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class User extends Component{
	render(){
		const {user}=this.props;
		return (
			<div>
				<div>{user.username}</div>
				<div>{user.age}</div>
				<div>{user.gender}</div>
			</div>
		)
	}
}
class Index extends Component{
	render(){
		return (
			<div>
				{users.map((user,i)=>{
					<User user={user} key={i} />
				})}
			</div>
		)
	}
}
ReactDOM.render(<Index />,document.getElementById('root'))

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class User extends Component{
	render(){
		const userElements=[];
		for(let user in users){
			userElements.push(
				<div>
					<div>{user.username}</div>
					<div>{user.age}</div>
					<div>{user.gender}</div>
				</div>
			)
		}
		return (
			<div>{userElements}</div>
		)
	}
}

ReactDOM.render(<Header />,document.getElementById('root'))
/// 编译成
ReactDOM.render(
	React.createElement(Header,null),
	document.getElementById('root')
)
//React.createElement中实例化一个Header
const header=new Header(props,children);
// React.createElement中调用header.render方法渲染组件的内容
const headJsxObject=header.render();
// ReactDOM用渲染后的JavaScript对象来构建真正的DOM元素
const headerDOM=createDOMFromObject(headerJsxObject)
// ReactDOM把数据塞到页面上
document.getElementById('root').appendChild(headerDOM)

constructor(){
	console.log('constructor')
}
//组件即将挂载
componentWillMount(){
	console.log('component will mount!')
}
// 组件挂载成功
componentDidMount(){
	console.log('component did mount!')
}
render(){
	console.log('render')
}

HttpServerRequest.getSession(true);


class AutoFocusInput extends Component{
	componentDidMount(){
		this.input.focus()
	}
	render(){
		return(
			<input ref={(input)=>{this.input=input}} />
		)
	}
}

ReactDOM.render(
	<Card>
		<h2>React小书</h2>	
		<div>开源,免费</div>
	</Card>,
	document.getElementById('root')
)
class Card extends Component{
	render(){
		<div className='card'>
			<div className='card-content'>
			{this.props.children[0]}
			</div>
			<div className='card-item'>
			{this.props.children[1]}
			</div>
		</div>
	}
}

class Card extends Component{
	render(){
		return(
			<div className='editor-html' dangerouslySetInnerHTML={{__html:this.props.content}}></div>
		)
	}
}

<h1 style={{fontSize:'12px',color:this.state.color}}></h1>

import React,{Component} from 'react'
import PropTypes from 'prop-types' 
class Comment extends Component{
	static propTypes{
		comment:PropTypes.object
	}
	render(){
		const {comment}=this.props;
		return (
			<div className='comment'>
				<div className='comment-user'>
					<span className='comment'>{comment.username}</span>
				</div>
				<p className='comment-content'>{comment.content}</p>
			</div>	
		)
	}
}

import React,{Component} from 'react'
export default(WrapedComponent,name)=>{
	class NewComponent extends Component{
		constructor(){
			super();
			this.state={data:null}
		}
		componentWillMount(){
			// let data=localStorage.getItem(name)
			// this.setState({data})
			ajax.get('/data/'+name,(data)=>{
				_this.setState({data})
			})
		}
		render(){
			return <WrapedComponent data={this.state.data} />
		}
	}
}
import wrapWithLoadData from 'wrapWithLoadData';
class InputWithUserName extends Component{
	render(){
		return <input value={this.props.data}>
	}
}
InputWithUserName=wrapWithLoadData(InputWithUserName,'username')
export default InputWithUserName;

class Index extends Component{
	static childContentTypes={
		themeColor:propTypes.string
	}
	constructor(){
		super()
		this.state={themeColor:'red'}
	}
	getChildContent(){
		return {themeColor:this.state.themeColor}
	}
	render(){
		return(
			<div>
				<Header />
				<Main />
			</div>
		)
	}
}
class Title extends Component{
	static contentTypes={
		themeColor:PropTypes.string
	}
	render(){
		return (
			<h1 style={{color:this.content.themeColor}}>React小书</h1>
		)
	}
}