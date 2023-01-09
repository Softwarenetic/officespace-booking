import {ReactNode, useEffect, useState} from "react";

const Expire = ({children, until, onExpire}: { children: ReactNode, until: number, onExpire: Function }) => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        setShow(true);
        const messageTimeout = setTimeout(() => {
            clearTimeout(messageTimeout);
            onExpire();
            setShow(false);
        }, until);
    }, [until])

    return <div>{show ? children : ''}</div>;
}

export default Expire;