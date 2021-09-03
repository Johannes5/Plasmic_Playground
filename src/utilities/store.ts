import { proxy } from "valtio";
import { devtools } from "valtio/utils";

interface Store {
    isFetchingYTPlaylist: boolean,
    nextPageToken: string,
    playlist: Object [],
    //array?: [],
    //currentItem?: Object,
    //functions
}

const store = proxy<Store>({
    isFetchingYTPlaylist: false,
        nextPageToken: "CAoQAA",
    playlist: [],
})

devtools(store, "Fetching")

export default store
