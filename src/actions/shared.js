import { getInitialData } from "../utils/api";

export function handleInitailData() {
	return (dispatch) => {
		return getInitialData().then(({ users, tweets }) => {});
	};
}
