import { useState } from "react";

// the name of the interface and the data type should be used as it 
// fetchingDataFromUrl<dataType>
interface fetchingDataFromUrl<dataType>{
    data: dataType | null,
    loading:boolean,
    error:string | null
}
// okay this is the format of data
// the same will be used to export and te same will be used to declare varibales
export function fetchingData<dataType>(url:string):fetchingDataFromUrl<dataType>{

    const [state,setState] = useState<fetchingDataFromUrl<dataType>>({
        data:null,
        loading:true,
        error:null,
    })

    return state
} 