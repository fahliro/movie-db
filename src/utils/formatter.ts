import { WATCHED_LIST } from "../constants";

export const handleIsWatchedListPage = ({pathname}: {pathname: string}) => pathname.substring(1, pathname.length) === WATCHED_LIST