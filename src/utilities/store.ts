import { proxy } from "valtio";
import { devtools } from "valtio/utils";

interface Store {
    isFetchingYTPlaylist: boolean;
    nextPageToken: string;
    //array?: [];
    //currentItem?: Object;
    //functions
}

const store = proxy<Store>({
    isFetchingYTPlaylist: false,
    nextPageToken: "CAoQAA"
})

devtools(store, "Fetching");

export default store;
