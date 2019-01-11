/* 
// 在单独构建的版本中辅助函数为Vuex.mapState
import {mapState} from 'vuex'
export default{
    // ...
    computed:mapState({
        // 箭头函数可使代码更简练
        count:state=>state.count,
        // 传字符串参数'count'等同于`state=>state.count`
        countAlias:'count',
        // 为了能够使用`this`获取局部状态,必须使用常规函数
        countPlusLocalState(state){
            return state.count+this.localCount
        }
    })
}

computed:mapState([
    // 映射 this.count为store.state.count
    'count'
])

computed:{
    localComputed(){},
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({})
}

getters:{
    doneTodoCount:(state,getters){
        return getters.doneTodos.length
    }
}
store.getters.doneTodoCount

computed:{
    doneTodosCount(){
        return this.$store.getters.doneTodosCount
    }
}

getters:{
    getTodoById:(state,getters)=>(id)=>{
        return state.todos.find(todo=>todo.id===id)
    }
}
store.getters.getTodoById(2)

var getTodoById=function(state,getters){
    return function(id){
        return state.todos.find(function(todo){
            return todo===id
        })
    }
}
store.getters.getTodoById(2)

import {mapGetters} from 'vuex'
export default {
    //...
    computed:{
        // 使用对象展开运算符将getter混入computed对象中
        ...mapGetters({
            'doneTodosCount',
            'anotherGetter'
        })
    }
}

mapGetters({
    // 映射`this.doneCount`为 store.getters.doneTodosCount
    doneCount:'doneTodosCount'
})

const store=new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        increment(state){
            // 变更状态
            state.count++
        }
    }
})

// ...
mutations:{
    increment(state,n){
        state.count+=n
    }
}
store.commit('increment',10)

mutations:{
    increment(state,payload){
        state.count+=payload.amount
    }
}
store.commit('increment',{
    amount:10
})


store.commit({
    type:'increment',
    amount:10
})
mutations:{
    increment(state,payload){
        state.count+=payload.amount
    }
}

// mutations-types.js
export const SOME_MUTATION='SOME_MUTATION'
// store.js
import {SOME_MUTATION} from './mutation-types'
const store=new Vue.Store({
    state:{},
    mutations:{
        // 可以使用es12015风格的计算属性命名功能来使用一个 常量作为函数名
        [SOME_MUTATION](state){
            // mutate state
        }
    }
})


mutation:{
    someMutation(state){
        api.callAsyncMethod(()=>{
            state.count++
        })
    }
}

import {mapMutations} from 'vuex'
export default{
    methods{
        ...mapMutations({
            // 将`this.increment`映射为`this.$store.commit('increment')`
            'increment',
            // `mapMutations`也支持载荷
            // 将`this.incrementBy(amount)`映射为`this.$store.commit('incrementBy',amount)`
            'incrementBy'
        }),
        ...mapMutations({
            // 将`this.add()` 映射为`this.$store.commit('increment')`
            add:'increment'
        })
    }
}

const store=new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count++
        }
    },
    actions:{
        increment(context){
            context.commit('increment')
        }
    }
})

actions:{
    increment({commit}){
        commit('increment')
    }
}

actions:{
    incrementAsync({commit}){
        setTimeout(()=>{
            commit('increment')
        },1000)
    }
}
// 以载荷形式分发
store.dispatch('incrementAsync',{
    amount:10
})
// 以对象形式分发
store.dispatch({
    type:'incrementAsync',
    amount:10
})

actions:{
    checkout({commit,state},products){
        // 把当前购物车的物品备份起来
        const savedCartItems=[...state.cart.added]
        // 发出结账请求,然后乐观地清空购物车
        commit(types.CHECKOUT_REQUEST)
        // 购物 API 接受一个成功回调和一个失败回调
        shop.buyProducts(
            products,
            // 成功操作
            ()=>commit(types.CHECKOUT_SUCCESS),
            // 失败操作
            ()=>commit(types.CHECKOUT_FAILURE,savedCartItem)
        )
    }
}

import {mapActions} from 'vuex'
export default{
    methods:{
        ...mapActions([
            // 将 this.increment 映射为this.store.dispatch('increment')
            'increment',
            // maoActions 也支持载荷 将this.incrementBy(amount) 映射为this.$store.dispatch('incrementBy')
            'incrementBy'
        ]),
        ...mapActions({
            //将 this.add()映射为 this.$store.dispatch('increment)
            add:'increment'
        })
    }
}


actions:{
    applicationCache({commit}){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('someMutation')
                resolve()
            },1000)
        })
    }
}
store.dispatch('actionA').then(()=>{
    //...
})

// 假设getData()和getOtherData()返回的是Promise
actions:{
    async actionA({commit}){
        commit('gotData',await getData())
    },
    async actionB({dispatch,commit}){
        await dispatch('actionA')// 等待actionA完成
        commit('gotOtherData',await getOtherData())
    }
}

const moduleA={
    state:{},
    mutations:{},
    actions:{},
    getters:{}
}
const moduleB={
    state:{},
    mutations:{},
    actions:{},
    getters:{}
}
const store=new Vuex.Store({
    modules:{
        a:moduleA,
        b:moduleB
    }
}) 
store.state.a //moduleA的状态
store.state.b //moduleB的状态

const moduleA={
    state:{count:0},
    mutations:{
        increment(state){
            // 这里的模块是局部的状态
            state.count++
        }
    },
    getters:{
        doubleCount(state){
            return state.count*2
        }
    }
}

const moduleA={
    actions:{
        incrementIfOddOnRootSum({state,commit,rootState}){
            if((state.count+rootState.count)%2===1){
                commit('increment')
            }
        }
    }
}
const moduleA={
    getters:{
        sumWithRootCount(state,getters,rootState){
            return state.count+rootState.count
        }
    }
}

// 通过插件的参数对象得到空间名称
// 然后返回Vuex插件函数
export function createPlugin(options={}){
    return function(store){
        // 把空间名字添加到插件模块的类型(type)中去
        const namespace=options.namespace||''
        store.dispatch(namespace+'pluginAction')
    }
} 

store.registerModule('myModule',{

})
store.registerModule('nested',{
    
})
*/

// 定义一个混合对象
var myMixin={
    created:function(){
        this.hello()
    },
    methods:{
        hello:function(){
            console.log('hello from mixin');
        }
    }
}
// 定义一个使用混合对象的组件
var Component=Vue.extend({
    mixins:[myMixin]
})
var component=new Component()