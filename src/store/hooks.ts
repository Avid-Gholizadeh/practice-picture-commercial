import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {type AppDispatch, type RootState} from './store'

type DispatchFunction = () => AppDispatch

export const useCardDispatch: DispatchFunction = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
