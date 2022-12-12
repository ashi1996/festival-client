const base_url = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333/api";

const createUrl = (url: string): string => `${base_url}/${url}`;

const GET_All_FESTIVALS_LIST = createUrl(`festivals`);
const DELETE_FESTIVAL = createUrl(`festivals`);
const EDIT_FESTIVAL = createUrl(`festivals`);
const CREATE_FESTIVAL = createUrl(`festivals`);
const GET_All_HOSTS_LIST = createUrl(`hosts`);

export {base_url, 
        GET_All_FESTIVALS_LIST,
        GET_All_HOSTS_LIST,
        DELETE_FESTIVAL,
        EDIT_FESTIVAL,
        CREATE_FESTIVAL
};