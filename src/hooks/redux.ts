import type { AppDispatch, RootState, Store } from '@redux';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector, useStore as useReduxStore } from 'react-redux';



export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useStore: () => Store = useReduxStore;
export const useAppDispatch: () => AppDispatch = useDispatch
