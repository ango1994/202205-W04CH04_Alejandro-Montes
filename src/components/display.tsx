import { Actions } from "./actions";
import { Keyboard } from "./keyboard";

export function Display() {
    return (
        <main className="phone">
            <Keyboard></Keyboard>
            <Actions></Actions>
        </main>
    );
}
