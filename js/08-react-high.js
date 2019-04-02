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
class App extends Component{
    render(){
        return (
            <div className='App'>
                这是我的App
            </div>
        )
    }
}

// components/A.js
import React,{Component} from 'react'
export default class A extends Component{
    render(){
        return (
            <div className='App'>
                这是我的A
            </div>
        )
    }
}

// components/B.js
import React,{Component} from 'react'
export default class B extends Component{
    render(){
        return (
            <div className='App'>
                这是我的B
            </div>
        )
    }
}

// components/C.js
import React,{Component} from 'react'
export default class C extends Component{
    render(){
        return (
            <div className='App'>
                这是我的C
            </div>
        )
    }
}