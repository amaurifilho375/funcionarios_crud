import React, {createContext, useReducer} from 'react';
import funci from '../data/funcionarios';

const FunciContext = createContext({})
const initialState = {funci}

const actions = {
    
    createFunci(state, action){
         const funcio = action.payload
         funcio.id = Math.random()
         return{
             ...state,
            funci: [...state.funci, funcio]

         }
    },

     updateFunci(state, action){
         const funciUpdate = action.payload
         return{
             ... state,
             funci: state.funci.map((f) => f.id === funciUpdate.id ? funciUpdate : f)
         }

     },

    deleteFunc(state, action){

        const funcio = action.payload
          return{
             ...state,
            funci: state.funci.filter((f) => f.id !== funcio.id)
        }

    }
}

export const FunciProvider = props =>{

       function reducer(state, action) {
        
            const funcao = actions[action.type]
            return funcao ? funcao(state , action) : state
                     
         }

      const [state, dispatch] = useReducer(reducer, initialState)

      return (
          <FunciContext.Provider value={{state, dispatch}}>
              {props.children}
          </FunciContext.Provider>
      )

}


export default FunciContext