import { StrictMode } from "react";

import { ThemeProvider } from "./theme";
import { App } from "../app";
import { MeasurementsProvider } from "./measurements";

export const Root = () => {
	return (
		<StrictMode>
			<ThemeProvider>
				<MeasurementsProvider>
					<App />
				</MeasurementsProvider>
			</ThemeProvider>
		</StrictMode>
	);
};
