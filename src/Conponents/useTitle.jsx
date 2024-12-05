import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() =>{
        document.title = `World Explore | ${title}`
    },[title])
    return (
        <div>
            
        </div>
    );
};

export default useTitle;