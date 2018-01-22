export default {
    install(Vue, options) {
        Vue.prototype.$myName="李冰洁"
        Vue.myGlobalMethod = function () { 
             
        }

        Vue.directive('my-directive', {  
            bind (el, binding, vnode, oldVnode) {
                
            }
        })
    
        Vue.mixin({
            created: function () {  
            }
        })    
    
        Vue.prototype.$myMethod = function (options) { 
        }
    }
}

