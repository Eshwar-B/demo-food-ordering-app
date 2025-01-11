import { useEffect, useState } from "react";


const useOnlinestatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () =>{
            setOnlineStatus(false)
        });
    }, []);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        });
    },[])


    return onlinestatus;
};

export default useOnlinestatus;