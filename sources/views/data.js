
import {JetView} from "webix-jet";
import DataCountriesView from "views/dataCountriesView";
import DataStatusesView from "views/dataStatusesView";

export default class DataView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			rows: [
				{
					view: "tabbar",
					multiview: true,
					options: [
						{
							value: _("Countries"),
							id: "tabCountries"
						},
						{
							value: _("Statuses"),
							id: "tabStatuses"
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