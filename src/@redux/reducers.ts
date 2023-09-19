import { combineReducers, createReducer, AnyAction } from '@reduxjs/toolkit'


const combinedReducers =combineReducers({
})

const rootReducers = createReducer(combinedReducers(undefined, { type: '' }), (builder) => {
    builder.addCase('HYDRATE', (state, action: AnyAction) => {
        return { ...state, ...action.payload }
    })
    .addDefaultCase(combinedReducers)    
})


export default rootReducers