export function Key({ phoneNumber }: { phoneNumber: number }) {
    return (
        <li>
            <button className="key">{phoneNumber}</button>
        </li>
    );
}
