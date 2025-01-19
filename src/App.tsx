import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main";
import CelebDetailPage from "./pages/celebs/celeb";
import InterestedPage from "./pages/interested";
import MapPage from "./pages/map";
import MyProfilePage from "./pages/my/profile";
import MyPage from "./pages/my";
import OauthPage from "./pages/oauth";
import RestaurantsFilteredByCategoryPage from "./pages/restaurants/category";
import RestaurantsFilteredByRegionPage from "./pages/restaurants/region";
import WeeklyRestaurantsPage from "./pages/restaurants/weekly";
import MyReviewsPage from "./pages/reviews/my";
import ReviewFormPage from "./pages/reviews/review";
import ReviewsPage from "./pages/reviews";
import SearchPage from "./pages/search";
import Provider from "./Provider";
import RestaurantDetailPage from "./pages/restaurants/restaurant";
import BottomNavbar from "./components/BottomNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>error</div>,
    element: (
      <Provider>
        <Outlet />
        <BottomNavbar />
      </Provider>
    ),
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "/celebs",
        children: [
          {
            path: "/celebs/celeb",
            element: <CelebDetailPage />,
          },
        ],
      },
      {
        path: "/interested",
        element: <InterestedPage />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/my",
        children: [
          { index: true, element: <MyPage /> },
          {
            path: "/my/profile",
            element: <MyProfilePage />,
          },
        ],
      },
      {
        path: "/oauth/:socialLoginType",
        element: <OauthPage />,
      },
      {
        path: "/restaurants",
        children: [
          {
            path: "/restaurants/category",
            element: <RestaurantsFilteredByCategoryPage />,
          },
          {
            path: "/restaurants/region",
            element: <RestaurantsFilteredByRegionPage />,
          },
          {
            path: "/restaurants/weekly",
            element: <WeeklyRestaurantsPage />,
          },
          {
            path: "/restaurants/restaurant",
            element: <RestaurantDetailPage />,
          },
        ],
      },
      {
        path: "/reviews",
        children: [
          { index: true, element: <ReviewsPage /> },
          {
            path: "/reviews/my",
            element: <MyReviewsPage />,
          },
          {
            path: "/reviews/review",
            element: <ReviewFormPage />,
          },
        ],
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
