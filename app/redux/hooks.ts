
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();  // Generic type add kar diya
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
