
import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		return {
			rows: [
				{
					type: "section",
					template: "Language"
				},
				{
					view: "segmented",
					inputWidth: 200,
					options: [
						{
							id: "en",
							value: "English"
						},
						{
							id: "ru",
							value: "Russian"
						},
					]
				},
				{}
			]
		};
	}
}