import create from 'zustand'

const useStore = create((set) => ({
 count: 0,
 name: "",
 address: "",
 select: "",
 NameHendler: (name) => set({ name }),
 AddressHendler: (address) => set({ address }),
 SelectHendler: (select) => set({ select }),
 Tozala: () => set((state) => ({ name: state.name = "" }))
}))

export default useStore
