import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
            style: {
              backgroundColor: "#28a745",
              width: "max-content",
              padding: "8px 10px",
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: "#dc3545",
              width: "max-content",
              padding: "8px 10px",
            },
          },
          style: {
            color: "#fff",
            fontSize: "16px",
            width: "max-content",
            padding: "8px 10px",
            backgroundColor: "rgb(31 41 55)",
            zIndex: 1000,
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
