// Api Response models
export interface FestivalsResponse {
    id:  number,
    name: string,
    hostId: number,
    startDate: string,
    endDate: string,
    isSuitableForChildren: boolean
}

export type EditOrUpdateFestivals = FestivalsResponse;

export interface HostsResponse {
    id: number,
    name: string
}