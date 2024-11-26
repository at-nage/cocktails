import { useContext } from "react";
import { MeasurementsContext } from "./provider";

export function useMeasurements() {
	return useContext(MeasurementsContext);
}
