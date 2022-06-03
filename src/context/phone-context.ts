import { createContext } from "react";

const initialContext: {
    phoneNumbers: Array<number>;
} = {
    phoneNumbers: [],
};

export const PhoneContext = createContext(initialContext);
