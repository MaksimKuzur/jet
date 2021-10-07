
import {JetView} from "webix-jet";
import DataCountriesView from "views/dataCountriesView";
import DataStatusesView from "views/dataStatusesView";

export default class DataView extends JetView {
	config() {
		return {
			rows: [
				{
					view: "tabbar",
					multiview: true,
					options: [
						{
							value: 'Countries',
							id: 'tabCountries'
						},
						{
							value: 'Statuses',
							id: 'tabStatuses'
						}
					]
				},
				{
					view: "multiview",
					cells: [
						{ $subview: DataCountriesView, id: "tabCountries" },
						{ $subview: DataStatusesView, id: "tabStatuses" }
					]
				}
			]
		};
	}
}