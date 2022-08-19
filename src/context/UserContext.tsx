import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

//Context needs an initial value
const initialValue = {
  isLoading: false,
  setIsLoading: () => {},

  errorAlert: false,
  setErrorAlert: () => {},

  isLoggedIn: false,
  setIsLoggedIn: () => {},

  userAccount: "",
  setUserAccount: () => {},

  chainId: "",
  setChainId: () => {},
};

//Setting types to those initial values (not needed)
type initialValueTypes = {
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;

  errorAlert: boolean;
  setErrorAlert: (newState: boolean) => void;

  isLoggedIn: boolean;
  setIsLoggedIn: (newState: boolean) => void;

  userAccount: string;
  setUserAccount: (newState: string) => void;

  chainId: string;
  setChainId: (newState: string) => void;
};

//Exporting the context
export const UserContext = createContext<initialValueTypes>(initialValue);

//----------------------------------------------------------------------------//

// setting the types for the context provider
type UserContextProps = {
  children: ReactNode;
};

//Encapsulates all the application, that the only use
export const UserContextProvider = ({ children }: UserContextProps) => {
  useEffect(() => {
    const localStorageLoggedIn = localStorage.getItem("loggedIn");
    if (localStorageLoggedIn != null) {
      setIsLoggedIn(Boolean(localStorageLoggedIn));
    }
    //Getting the user address from the localStorage (will only access if its not null)
    const localStorageAddress = localStorage.getItem("userAddress");
    if (localStorageAddress != null) {
      setUserAccount(localStorageAddress);
    }
  }, []);

  const [isLoading, setIsLoading] = useState(initialValue.isLoading);
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue.isLoggedIn);
  const [userAccount, setUserAccount] = useState(initialValue.userAccount);
  const [errorAlert, setErrorAlert] = useState(initialValue.errorAlert);
  const [chainId, setChainId] = useState(initialValue.chainId);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
        userAccount,
        setUserAccount,
        errorAlert,
        setErrorAlert,
        chainId,
        setChainId,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export function useContextProvider(): initialValueTypes {
  const context = useContext(UserContext);
  return context;
}
