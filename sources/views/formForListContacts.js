
import {JetView} from "webix-jet";
import {statusesCollection} from "models/statuses";
import {countriesCollection} from "models/countries";


export default class FormForListContactsView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			view: "form",
			localId: "formForListContacts",
			elements: [
				{
					view: "text",
					label: _("Name"),
					name: "Name",
					placeholder: "Type here.."
				},
				{
					view: "text",
					label: "Email",
					name: "Email"
				}, 
				{
					view: "combo",
					label: _("Status"),
					name: "Status",
					options: statusesCollection
				}, 
				{
					view: "combo",
					label: _("Country"),
					name: "Country",
					options: countriesCollection
				},
				{
					margin: 20,
					cols: [
						{
							view: "button",
							type: "form",
							value: _("Update"),
							width: 200,
							align: "right",
							click:() => {
								const listContactItemValues = this.getRoot().getValues();
								this.app.callEvent("onListContactItemUpdate", [listContactItemValues]);
							}
						}
					]
				},
				{}
			]
		}
	}
	ready() {
		this.on(this.app, "listContactItemSelect", (listContactItem) => {
		this.$$("formForListContacts").setValues(listContactItem);
		});
	}
}