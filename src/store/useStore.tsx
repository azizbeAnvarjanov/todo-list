import { create } from "zustand";

type Store = {
    openForm: string,
    setOpenForm: (value: string) => void
    openEditForm: boolean,
    openAddForm: boolean,
    openDirectoryForm: boolean,
    editTodoId: number,
    filtering: string,
    setOpenEditForm: (value: boolean) => void
    setOpenAddForm: (value: boolean) => void
    setOpenDirectoryForm: (value: boolean) => void
    setEditTodoId: (value: number) => void
    setFiltering: (value: string) => void
}

const useStore = create<Store>()((set) => ({
    openForm: "",
    openEditForm: false,
    openAddForm: false,
    openDirectoryForm: false,
    editTodoId: 0,
    filtering: "all",
    setOpenForm: (value: string) => set({ openForm: value }),
    setFiltering: (value: string) => set({ filtering: value }),
    setEditTodoId: (value: number) => set({ editTodoId: value }),
    setOpenEditForm: (value: boolean) => set({ openEditForm: value }),
    setOpenAddForm: (value: boolean) => set({ openEditForm: value }),
    setOpenDirectoryForm: (value: boolean) => set({ openEditForm: value }),
}));


export default useStore;