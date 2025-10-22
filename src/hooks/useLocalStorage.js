import { useState } from "react";

export default function useLocalStorage() {
    const [localed ,setLocaled] = useState(() => getLocal());

    function initLocal(value) {
        localStorage.setItem('favorites' ,JSON.stringify(value));
    }

    function getLocal () {
        const favorites = localStorage.getItem('favorites');
        return favorites;
    }

    return [localed, setLocaled ,initLocal];
}