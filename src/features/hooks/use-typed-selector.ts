import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "app/store";

export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
