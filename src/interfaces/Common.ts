import { NETWORK_TYPE } from "../enums/common";

export interface IUseHandleNetwork {
    network: NETWORK_TYPE | undefined,
    isOnline: boolean
}