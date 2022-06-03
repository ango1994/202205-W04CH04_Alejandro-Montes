import { useContext } from "react";
import { PhoneContext } from "../context/phone-context";
import { Key } from "./key";

export function Keyboard() {
    const { phoneNumbers } = useContext(PhoneContext);

    return (
        <div className="keyboard-container">
            <ol className="keyboard">
                {phoneNumbers.map((number) => (
                    <Key phoneNumber={number} />
                ))}
            </ol>
        </div>
    );
}
