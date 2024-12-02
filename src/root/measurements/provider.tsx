import React from "react";

import { useSessionStorage } from "@mantine/hooks";

const measurements = ["parts", "millimeters"] as const;

type Measurement = (typeof measurements)[number];

interface MeasurementProps {
	value: Measurement;
	set: React.Dispatch<React.SetStateAction<Measurement>>;
	data: typeof measurements;
	convert: (number: number) => number;
}

const converters: Record<MeasurementProps["value"], MeasurementProps["convert"]> = {
	parts: (number) => number,
	millimeters: (number) => Math.round(60 * number),
};

export const MeasurementsContext = React.createContext<MeasurementProps>({
	value: "parts",
	set: () => {},
	data: measurements,
	convert: converters["parts"],
});

export const MeasurementsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [value, set] = useSessionStorage<Measurement>({ key: "measurement", defaultValue: "millimeters" });
	return <MeasurementsContext.Provider value={{ value, data: measurements, set, convert: converters[value] }}>{children}</MeasurementsContext.Provider>;
};
