import { atom, selector } from "recoil";

export const todoAtom = atom({
      key:"todoAtom",
      default:[]
})

export const filterAtom = atom({
      key:"filterAtom",
      default:""
})

export const filterSelector = selector({
      key:"filterSelector",
      get:({get}) =>{
            const arr = get(todoAtom)
            const filter = get(filterAtom);
            console.log("Arr ",arr,"filter",filter);
            let value = arr.filter(function(x){
                  return x.title===filter
                  })
            console.log("value ",value);
            return value;
      }
})