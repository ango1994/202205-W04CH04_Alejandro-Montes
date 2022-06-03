import { ReactElement } from "react";
import { useState } from "react";
import { generateNumbersArr } from "../data/phone-numbers";

import { PhoneContext } from "./phone-context";

export function PhoneContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<number> = [];
    const [phoneNumbers, setPhoneNumbers] = useState(initialState);

    setPhoneNumbers(generateNumbersArr);

    const context = { phoneNumbers };

    return (
        <PhoneContext.Provider value={context}>
            {children}
        </PhoneContext.Provider>
    );
}
