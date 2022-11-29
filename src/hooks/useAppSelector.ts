import { RootState } from './../redux/rootReducer'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const useAppSelecror: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelecror
