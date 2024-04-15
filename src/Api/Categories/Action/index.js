import { CircularProgress } from "@mui/material"

export const SHOW_LOADER  = () => {
    return {
        type: "SHOW_LOADER",
        // payload: <CircularProgress />
    }
}
export const HIDE_LOADER  = () => {
    return {
        type: "HIDE_LOADER",
        // payload: val
    }
}
export const CART_DATA  = () => {
    return {
        type: "CART_DATA",
    }
}