
import { defineStore } from 'pinia'
interface Stae {
    token:string
    Roles:string;
    networkState:boolean
}

export const mainStore = defineStore('main',{
    state:<Stae>()=>({
        token:'',
        Roles:'',
        networkState:true,
    }),
    getters:{
        getToken:(state:Stae)=>state.token,
        getRoles:(state:Stae)=>state.Roles,
    },
    actions:{
        setToken(params:string):void{
            this.token = params
        },
        setRoles(params:string):void{
            this.Roles:<Stae["Roles"]> = params
        },
        setNetworkState(params:boolean):void{
            this.networkState = params
        }
    },
    persist:{
        enabled:true,
        storeage:'localStorage',
        paths:['token','Roles']
    }
})
