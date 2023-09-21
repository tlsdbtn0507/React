import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from "./pages/Home";
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";
import { lazy, Suspense } from "react";

const BlogPage = lazy(() => import("./pages/Blog"));

const PostPage = lazy(() => import("./pages/Post"));
//엡이 무진장 커서 import해야할 파일이 많다면 해당 앱의 퍼포먼스는 끔찍해 진다 이를 해결하기 위해
//import할 파일에서 jsx는 lazy함수로 처리하고
//loader같은 경우는 import함수를 쓰면 되는데 이는 비동기 함수라 async혹은 then처리를 해줘야 한다

const loaderLazy = async (page, { params }) => {
  return (await import(`./pages/${page}`)).loader(params);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            loader: async () => {
              return (await import("./pages/Blog")).loader();
            },
          },
          {
            path: ":id",
            element: <PostPage />,
            loader: async ({ params }) => {
              return (await import("./pages/Post")).loader({ params });
            },
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
