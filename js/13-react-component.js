// import React,{Component} from 'react'
// import d from './D'
// @d
// class B extends Component{
//     render(){
//         return (
//             <div className='container'>
//                 <img src={require('../images/B.png')} />
//             </div>
//         )
//     }
// }
// export default B


// App.js
import React,{Component} from 'react'
import Tabbar from './components/tabbar'
import RouterMap from './router.js'
import './App.css'
class App extends Comopnent{
    render(){
        return (
            <div className='App'>
                <RouterMap></RouterMap>
                <Tabbar/>
            </div>
        )
    }
}
export default App;

// App.css
/*
a:hover,a:visited,a:link,a:active{
    text-decoration:none;
    color:#333;
}
*/

// components/tabbar/index.js
import React,{Component} from 'react'
import 'index.css'
import Link from 'react-router-dom'

const tabbarArr=[
    {text:'首页',img:'icon-home',link:'/home'},
    {text:'分类',img:'icon-fenlei',link:'/category'},
    {text:'购物车',img:'icon-gouwuche',link:'/car'},
    {text:'我的',img:'icon-user',link:'/user'}
]
class Tabbar extends Component{
    constructor(props){
        super(props)
        this.itemChange=this.itemChange.bind(this)
        this.state={
            index:0
        }
    }
    itemChange(i){
        this.setState({
            index:i
        })
    }
    render(){
        const url=location.url;
        return (
            <div className='tabbar'>
                <div className='tabbar-content'>
                    {
                        tabbarArr.map((v,i)=>(
                            <Link to={v.link} className={'tabar-item'+url.indexOf(v.link)>-1?' active':''} key={i} onClick={this.itemChange(i)}>
                                <div className={'iconfont '+v.img}></div>
                                <div>{v.text}</div>
                            </Link>
                        ))
                    }
                </div>   
            </div>
        )
    }
}
export default Tabbar;

// 使用高阶组件包裹
const Tabbar=(WrappedComponent)=>class Tabbar extends Component{
    constructor(props){
        super(props)
        this.itemChange=this.itemChange.bind(this)
        this.state={
            index:0
        }
    }
    itemChange(i){
        this.setState({
            index:i
        })
    }
    render(){
        const url=location.url;
        return (
            <div className='tabar-container'>
                <div className='tabbar-children'>
                    <WrappedComponent/>
                </div>
                <div className='tabbar'>
                    <div className='tabbar-content'>
                        {
                            tabbarArr.map((v,i)=>(
                                <Link to={v.link} className={'tabar-item'+url.indexOf(v.link)>-1?' active':''} key={i} onClick={this.itemChange(i)}>
                                    <div className={'iconfont '+v.img}></div>
                                    <div>{v.text}</div>
                                </Link>
                            ))
                        }
                    </div>   
                </div>
            </div>
            
        )
    }
}

// components/tabbar/index.css
/*
iconfont{
    font-size:28px !important;
}
.tabbar{
    height:50px;
    position:absolute;
    bottom:0;
    width:100%;
    border:1px solid rgba(0,0,0,0.5);
    padding:5px 0;
}
.tabbar-content{
    display:flex;
}
.tabbar-item{
    flex:1;
}
.tabbar-item.active{
    color:red;
}
*/

// 使用react-router-dom
// npm i --save rect-router-dom
// router.js
import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Car from './pages/car'
import User from './pages/user'
export default ()=>{
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/category' component={Category}></Route>
            <Route path='/car' component={Car}></Route>
            <Route path='/user' component={User}></Route>
        </Switch>
    </BrowserRouter>
}


// ./pages/home.js
import React from 'react'
import Tabbar from '../components/tabbar'
class Home extends React.Component{
    render(){
        return (
            <div>
                <div>Home</div>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
export default Home;

// 重新修改home使用
// ./pages/home.js
import React from 'react'
import Tabbar from '../components/tabbar'
class Home extends React.Component{
    render(){
        return (
            <div>
                <div>Home</div>
            </div>
        )
    }
}
export default Tabbar(Home);

// ./pages/home.js
import React from 'react'
import Tabbar from '../components/tabbar'
class Category extends React.Component{
    render(){
        return (
            <div>
                <div>Category</div>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
export default Category;

// ./pages/home.js
import React from 'react'
import Tabbar from '../components/tabbar'
class Car extends React.Component{
    render(){
        return (
            <div>
                <div>Car</div>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
export default Car;

// ./pages/home.js
import React from 'react'
import Tabbar from '../components/tabbar'
class User extends React.Component{
    render(){
        return (
            <div>
                <div>User</div>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
export default User;
