// created 2019-03-30
// 这是React高级组件的学习

// index.js
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<App />,document.getElementById('root'))

// App.js
import React,{Component} from 'react'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import E from './components/E'
import F from './components/F'
class App extends Component{
    render(){
        return (
            <div className='App'>
                <A></A>
                <B name={'张三'} age={18}></B>
                <C></C>
            </div>
        )
    }
}

// components/A.js
import React,{Component} from 'react'
function A(WrappedComponent){
    return class A extends Component{
        render(){
            return (
                <div className='container'>
                    <div className='header'>
                        <div>提示</div>
                        <div>X</div>
                    </div>
                    <div>
                        <WrappedComponent></WrappedComponent>
                    </div>
                </div>
            )
        }
    }
}
export default A;

// components/A.js
// 操纵props
import React,{Component} from 'react'
function A(WrappedComponent){
    const {age,...otherProps}=this.props;
    return class A extends Component{
        render(){
            return (
                <div className='container'>
                    <div className='header'>
                        <div>提示</div>
                        <div>X</div>
                    </div>
                    <div>
                        <WrappedComponent sex={'男'} {...otherProps}></WrappedComponent>
                    </div>
                </div>
            )
        }
    }
}
export default A;

// components/A.js
// 访问ref
import React,{Component} from 'react'
export default (title)=>(WrappedComponent)=>class A extends Component{
    refc(instance){
        instance.getName&&instance.getName()
    }
    render(){
        return class A extends Component{
            render(){
                return (
                    <div className='container'>
                        <div className='header'>
                            <div>{title}</div>
                            <div>X</div>
                        </div>
                        <div>
                            <WrappedComponent sex={'男'} {...otherProps} ref={this.refc.bind(this)}></WrappedComponent>
                        </div>
                    </div>
                )
            }
        }
    }
}
// components/A.js
// 抽取状态
import React,{Component} from 'react'
export default (title)=>(WrappedComponent)=>class A extends Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    onInputChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        const {age,...otherProps}=this.props
        const newProps={
            value:this.state.value,
            onInput:this.onInputChange
        }
        return class A extends Component{
            render(){
                return (
                    <div className='container'>
                        <div className='header'>
                            <div>{title}</div>
                            <div>X</div>
                        </div>
                        <div>
                            <WrappedComponent sex={'男'} {...otherProps} {...newProps}></WrappedComponent>
                        </div>
                    </div>
                )
            }
        }
    }
    
}

// components/B.js
//操纵props
import React,{Component} from 'react'
import A from './A'
class B extends Component{
    render(){
        return (
            <div className='container'>
                我的名字:{this.props.name}
                我的年龄:{this.props.age}
                我的性别:{this.props.sex}
                <img src={require('../images/B.png')} />
            </div>
        )
    }
}
export default A(B)
//另一种使用高阶组件的方式
// components/B.js
import React,{Component} from 'react'
import d from './D'
@d
class B extends Component{
    render(){
        return (
            <div className='container'>
                <img src={require('../images/B.png')} />
            </div>
        )
    }
}
export default B
// components/B.js
import React,{Component} from 'react'
import A from './A'
class B extends Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    changeInput(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return (
            <div className='container'>
            {/* <input type='text' value={this.state.value} onInput={this.changeInput} /> */}
            <input type='text' {...this.props} />
                <img src={require('../images/B.png')} />
            </div>
        )
    }
}
export default A('提示')(B)

// components/C.js
import React,{Component} from 'react'
 class C extends Component{
    render(){
        return (
            <div className='container'>
                <img src={require('../images/C.png')} />
            </div>
        )
    }
}
export default C
// components/C.js
import React,{Component} from 'react'
import A from './A'
 class C extends Component{
    render(){
        return (
            <div className='container'>
                <img src={require('../images/C.png')} />
            </div>
        )
    }
}
export default A(C)
// components/C.js
// 高级组件的另一种表达方式
import React,{Component} from 'react'
import A from './A'
@A('告警')
 class C extends Component{
     getName(){
         return '我是C组件'
     }
    render(){
        return (
            <div className='container'>
                <img src={require('../images/C.png')} />
            </div>
        )
    }
}
export default C

// D.js
// 普通的高级组件
import React,{Component} from 'react'

function d(WrappedComponent){
    return class D extends Component{
        render(){
            return (
                <div className='container'>
                    <WrappedComponent></WrappedComponent>
                </div>
            )
        }
    }
} 
export default d
//D.js
// 实现继承方式的高阶组件
const modifyPropsHOC=(WrappedComponent)=> class NewComponent extends WrappedComponent{
    static displayName=`NewComponent(${getDisplayName(WrappedComponent)})`
    componentWillMount(){
        console.log("我是修改后生命周期")
    }
    render(){
        const element=supeer.render()
        const newStyle={
            color:element.type==='div'?'red':'green'
        }
        const newProps={...this.props,style:newStyle}
        return React.cloneElement(element,newProps,element.props.children)
    }
}
function getDisplayName(WrappedComponent){
    WrappedComponent.displayName|| WrappedComponent.name||'Component'
}
export default modifyPropsHOC;

// E.js
import React,{Component} from 'react'
import D from './D'
@D
class E extends Component{
    render(){
        return (
            <div>
                我是E
            </div>
        )
    }
}
export default E;

// F.js
import React,{Component} from 'react'
import D from './D'
@D
class F extends Component{
    componentWillMount(){
        console.log("我是原始生命周期")
    }
    render(){
        return (
            <div>
                我是F
            </div>
        )
    }
}
export default F;