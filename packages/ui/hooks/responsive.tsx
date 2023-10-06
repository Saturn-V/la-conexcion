import { useMediaQuery } from "react-responsive";

export enum ResponsiveQuery {
    Mobile = "MOBILE",
    Desktop = "DESKTOP"
}

export function useResponsiveQuery(type: ResponsiveQuery) {
    let query = '(min-width: 751px)'
    switch (type) {
        case ResponsiveQuery.Mobile:
            query = '(max-width: 750px)'
            break;
        default:
            break;
    }

    return useMediaQuery({query})
}