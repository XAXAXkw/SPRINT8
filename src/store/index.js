import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SHIPS:[],SWDATA:[], showCard:null,
  },
  getters: {
  },
  mutations: {
    async nextSwapi(npage){
      await axios.get(npage)
      .then((res)=>{
        this.state.SWDATA = res.data;
        this.state.SHIPS.push(this.state.SWDATA.data.results);
        console.log(this.SHIPS)
      });
    }
  },
  actions: {
    async  getSwapi(){
      await axios.get('https://swapi.py4e.com/api/starships/?page=1')
      .then((res)=>{
        this.state.SWDATA = res.data;
        this.state.SHIPS = res.data.results
      });
    }
  },
  modules: {
  }
})
