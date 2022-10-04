import RegisterPage from "./pages/RegisterPage";
import {CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegisterPage
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: ChatPage
    }
]