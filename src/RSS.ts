/**
 * IT IS DEFINITION FOR RSS FEED
 * If you want to get more feed, please add it
 **/
import { RSSItem } from "./index";

const BASE_URL = "https://azu.github.io/github-search-rss";

// Query references
// https://docs.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax
// https://docs.github.com/en/github/searching-for-information-on-github/about-searching-on-github

// TYPE references
// https://docs.github.com/en/graphql/reference/queries#searchresultitemconnection

export const SEARCH_ITEMS: RSSItem[] = [
    {
        title: "Playstation Vita repositories",
        query: "vita OR psvita OR ps-vita OR psv OR playstation-vita in:topics",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/ps-vita-repo.json`
    },
];
