import { httpClient } from '@/config/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { NOTIFICATION_SERVICE } = API_PATHS;

export const actions = {
	async subscribeToNewsletter(email: string) {
		try {
			const response = await httpClient.post(`${NOTIFICATION_SERVICE}/newsletter/subscribe`, { email });
			if (response.data) return true;
		} catch (e) {
			return false;
		}
		return false;
	},
	contactUs: async (data: any) => {
		try {
			const response = await httpClient.post(`${NOTIFICATION_SERVICE}/contact-us`, data);
			if (response.data) return true;
		} catch (e) {
			return false;
		}
		return false;
	},
};
