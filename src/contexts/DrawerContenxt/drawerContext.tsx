import { createContext, useContext, useState } from "react";

export type DrawerState = {
  hide: boolean;
  handleToggle: () => void;
  handleSetHideTrue: () => void;
  
};

const initialState: DrawerState = {
  hide: false,
  handleToggle() {},
  handleSetHideTrue() {},
  
};

const DrawerContext = createContext<DrawerState>(initialState);

const DrawerContextProvider = (props: any) => {
  const [hide, setHide] = useState<boolean>(true);

  const handleToggle = () => setHide(!hide);
  const handleSetHideTrue = () => setHide(true);  
  return (
    <DrawerContext.Provider
      value={{ hide, handleToggle, handleSetHideTrue }}
    >
      {props.children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;

export const useDrawerContext = () => useContext(DrawerContext);
