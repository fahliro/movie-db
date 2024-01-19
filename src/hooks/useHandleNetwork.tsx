import { useState } from "react";
import { NETWORK_TYPE } from "../enums/common";
import { IUseHandleNetwork } from "../interfaces/Common";

const useHandleNetwork = (): IUseHandleNetwork => {
  const [network, setNetwork] = useState<NETWORK_TYPE | undefined>(undefined);

  const ONLINE: NETWORK_TYPE = NETWORK_TYPE.ONLINE;
  const OFFLINE: NETWORK_TYPE = NETWORK_TYPE.OFFLINE;

  window.addEventListener(ONLINE.toLowerCase(), () => setNetwork(ONLINE));
  window.addEventListener(OFFLINE.toLowerCase(), () => setNetwork(OFFLINE));

  const isOnline: boolean = network === ONLINE;
  isOnline && setTimeout(() => setNetwork(undefined), 3000);

  return { network, isOnline };
};

export default useHandleNetwork;
