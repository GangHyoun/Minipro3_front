import {RecipeProvider} from "./recipeContext";
import { Suspense, lazy } from "react";
const { createBrowserRouter } = require("react-router-dom");


const Loading = <div className="loading-image"></div>

const Main = lazy(() => import("../pages/MainPage"))
const Records = lazy(() => import("../pages/RecordsPage"))
const Chatbot = lazy(() => import("../pages/ChatbotPage"));
const Analysis = lazy(()=> import("../pages/AnalysisPage"))
const Recommend= lazy(()=> import("../pages/RecommendPage"))
const Recipe= lazy(()=> import("../pages/RecipePage"))
const Login= lazy(()=> import("../pages/LoginPage"))
const Signup= lazy(()=> import("../pages/SignupPage"))


const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "/records",
        element: <Suspense fallback={Loading}><Records/></Suspense>
    },
    {
        path: "/chatbot",
        element: <Suspense fallback={Loading}><Chatbot/></Suspense>
    },
    {
        path: "/analysis",
        element: <Suspense fallback={Loading}><Analysis/></Suspense>
    },
    {

            path: "/recommend",
            element:(<RecipeProvider>
                <Suspense fallback={Loading}><Recommend/></Suspense>
            </RecipeProvider>)
    },
    {
        path: "/recipe",
        element: (<RecipeProvider><Suspense fallback={Loading}><Recipe/></Suspense>
        </RecipeProvider>)
    },
    {
        path: "/login",
        element: <Suspense fallback={Loading}><Login/></Suspense>
    },
    {
        path: "/signup",
        element: <Suspense fallback={Loading}><Signup/></Suspense>
    }
])

export default root
