import {create} from 'zustand'
import {UniqueOption} from "../utils/types/common.types";

interface InputState {
    inputValue: string
    selectedOptions: (string | UniqueOption)[]
    setInputValue: (newValue: string) => void,
    setSelectedOptions: (newValue: (string | UniqueOption)[]) => void,
    computedValue: number,
    setIsError: (newValue: boolean) => void,
    setComputedValue: (newValue: number) => void,
    isError: boolean,
}

export const useInputStore = create<InputState>()((set) => ({
    selectedOptions: [],
    inputValue: "",
    computedValue: 0,
    isError: false,
    setIsError: (newValue) => set({isError: newValue}),
    setComputedValue: (newValue) => set({computedValue: newValue}),
    setSelectedOptions: (newValue) => set({selectedOptions: newValue}),
    setInputValue: (newValue) => set({inputValue: newValue}),
}))