import { EditOrUpdateFestivals, HostsResponse } from './../consts/model';
import { FestivalsResponse } from "../consts/model";
import * as API_ROUTES from '../../common/consts/api_routes';


const FETCH_API = async <T>(_url: string, _method: "POST" | "PUT" | "PATCH" | "DELETE" | "GET", _body?: any): Promise<T> => {
  try {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const resp = await fetch(_url, {
      method: _method,
      body: JSON.stringify(_body),
      headers
    });
    return await resp.json();
  } catch (err: any) {
    console.log(err)
    return err;
  }
}

const FETCH_ALL_FESTIVALS = async (): Promise<FestivalsResponse[]> => FETCH_API(`${API_ROUTES.GET_All_FESTIVALS_LIST}`, "GET");
const DELETE_FESTIVAL = async (id:number): Promise<FestivalsResponse[]> => FETCH_API(`${API_ROUTES.DELETE_FESTIVAL}/${id}`, "DELETE" , {});
const EDIT_FESTIVAL = async (id:number, festival:EditOrUpdateFestivals ): Promise<FestivalsResponse[]> => FETCH_API(`${API_ROUTES.DELETE_FESTIVAL}/${id}`, "PUT" , festival);
const CREATE_FESTIVAL = async (festival:EditOrUpdateFestivals ): Promise<FestivalsResponse[]> => FETCH_API(`${API_ROUTES.CREATE_FESTIVAL}`, "POST" , festival);
const FETCH_ALL_HOSTS = async (): Promise<HostsResponse[]> => FETCH_API(`${API_ROUTES.GET_All_HOSTS_LIST}`, "GET");

export {
  FETCH_ALL_FESTIVALS,
  FETCH_ALL_HOSTS,
  DELETE_FESTIVAL,
  EDIT_FESTIVAL,
  CREATE_FESTIVAL
};