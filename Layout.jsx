import { Outlet } from "react-router"
import { Headers } from "./Header"
import { Footers } from "./Footer"
export const Layout = () => {
    return (
        <>
        <Headers/>
        <Outlet/>
        <Footers/>
        </>
    )
}