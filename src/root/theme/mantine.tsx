import { createTheme, MantineProvider } from "@mantine/core";

// @ts-expect-error
import '@mantine/core/styles.css';

const theme = createTheme({
	/** Put your mantine theme override here */
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
