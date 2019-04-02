//App.js
import React from 'react';
import logo from './logo.svg'
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import ThemeContext from './components/ThemeContext';
import ThemeBar from './components/ThemeBar';
const tags=['恐龙','足球小子']
const themes={
    light:{
        classnames:'btn btn-primary',
        bgColor:'#eee',
        color:'#000'
    },
    dark:{
        classnames:'btn -btn-light',
        bgColor:'#222',
        color:'#fff'
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:['this is my first reply']
        }
        this.addComment=this.addComment.bind(this);
    }
    addComment(comment){
        this.setState({
            comments:[...this.state.comments,comment]
        })
    }
    render(){
        return (
            <ThemeContext.Provider value={themes.light}>
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome toReact</h1>
                </header>
                {/* <NameCard name='King' number={123456789} isHuman tags={}></NameCard> */}
                {/* <LikesButton></LikesButton> */}
                {/* <CommentList></CommentList> */}
                {/* <CommentBox CommentLength={this.comments.length} onAddComment={this.addComment}></CommentBox> */}
                <ThemeBar />
            </div>
            </ThemeContext.Provider>
        )
    }
}
export default App;

// NameCard.js
class NameCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name,number,isHuman,tags}=this.props;
        return (
            <div className='alert alert-success'>
                <h4 className='alert-heading'>{name}</h4>
                <ul>
                    <li>电话:{number}</li>
                    <li>{isHuman?'人类':'外星任务'}</li>
                    <hr></hr>
                    <p>
                        {
                            tags.map({tag,index}=>{
                                <span className='badge badge-pill badge-primary' key={index}>{tag}</span>
                            })
                        }
                    </p>
                </ul>
            </div>
        )
        
    }
}

import React from 'react'
class LikesButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0
        }
        this.increaseLikes=this.increaseLikes.bind(this);
    }
    increaseLikes(){
        console.log(this)
    }
    render(){
        return (
            <div className='likes-button-component'>
                <button 
                    type='button' 
                    className='btn btn-outline-primary btn-lg'
                    onClick={this.increaseLikes}
                >{this.state.likes}</button>
            </div>     
        )
    }
}
export default LikesButton;

// DigitalClock.js
import React from 'react' 
class DigitalClock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
    }
    componentDidMount(){
        this.timer=setInterval(function(){
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentDidUpdate(currentProps,state){
        console.log(nextState)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <div className='digital-clock-component jumBotron'>
                <h1>{this.state.date.toLocaleTimeString}</h1>
            </div>
        )
    }
}

//CommentBox.js
import React from 'react';
class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmmit=this.handleSubmmit.bind(this)
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmmit(event){
        // this.state.value;
        this.props.onAddComment(this.textInput.value);
        event.preventDefault()
    }
    render(){
        return (
            <from className='p-5' onSubmit={this.handleSubmmit}>
                <div className='from-group'>
                    <label>留言内容</label>
                    {/* <input type="text" className='form-control' placeholder='请输入内容' value={this.state.value} onChange={this.handleChange} /> */}
                    <input type="text" className='form-control' placeholder='请输入内容' ref={(textInput)=>{this.textInput=textInput}} />
                </div>
                <button type='submit' className='btn btn-primary'>留言</button>
                <p>已有{this.props.CommentLength}条评论</p>
            </from>
        )
    }
}

//CommentList.js
import React from 'react'
const CommentList =({comments})=>{
    return (
        <div className='comment'>
        <label>评论列表</label>
        <ul className='list-group mb-3'>
        {
            comments.map((comment,index)=>{
                <li key={index} className='list-group-item'>{comment}</li>
            })
        }
        </ul>
        </div>
    )
}
export default CommentList
//思想: 双向数据绑定,数据流子上向下

// theme-context.js
const ThemeContext=React.createContext()
export default ThemeContext;

import React from 'react'
import ThemeContext from '../theme-context'
const ThemeBar=()=>{
    <ThemeContext.Consumer>
        {
            theme=>{
                <div className='alert mt-5' style={{backgroundColor:themebgColor,color:theme.color}}>
                <button>按钮</button>
                </div>
            }
        }
    </ThemeContext.Consumer>
}
export default ThemeBar