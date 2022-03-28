import { ISpace } from "../types/ISpace";

const URL = "https://api.spacexdata.com/v4/launches/latest";
export const getData = async (): Promise<ISpace> => {
    const res: Response = await fetch(URL);
    if (!res.ok) throw Error(res.statusText);
    return res.json();
}; 




