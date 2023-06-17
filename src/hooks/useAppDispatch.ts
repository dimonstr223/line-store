import { RootState } from '../redux-tk/store'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector