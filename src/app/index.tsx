import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./layout";

import { CocktailPage } from "./pages/cocktail";
import { CocktailsPage } from "./pages/cocktails";

import { cocktails, cocktail } from "./pages/loaders";

const router = createBrowserRouter(
	[
		{
			element: <Layout />,
			hydrateFallbackElement: <div />,
			children: [
				{
					// path: "/cocktails",
					path: "/",
					element: <CocktailsPage />,
					loader: cocktails,
				},
				{
					// path: "/cocktails/:name",
					path: "/:name",
					element: <CocktailPage />,
					loader: cocktail,
					// ErrorBoundary: <div>error</div>,
				},
			],
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true,
		},
	},
);

export const App = () => {
	return (
		<RouterProvider
			router={router}
			future={{
				v7_startTransition: true,
			}}
		/>
	);
};
