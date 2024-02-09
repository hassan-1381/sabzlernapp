
import CourseInfo from "./pages/CourseInfo/CourseInfo.jsx"
import Category from "./pages/Category/Category.jsx"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo.jsx"
import Index from "./pages/Index/Index.jsx"



const routes = [
    { path: '/', element: <Index /> },
    { path: '/course-info/:courseName', element: <CourseInfo /> },
    { path: '/category-info/:categoryName', element: <Category /> },
    { path: '/article-info/:articleName', element: <ArticleInfo /> },
]

export default routes