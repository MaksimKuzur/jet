
import {JetView} from "webix-jet";
import {statuses} from "models/statuses";
import {countries} from "models/countries";


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
					placeholder: _("Type here..")
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
					options: statuses
				}, 
				{
					view: "combo",
					label: _("Country"),
					name: "Country",
					options: countries
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
								const listContactItemValues = this.$getFormValues();
								this.app.callEvent("onListContactItemUpdate", [listContactItemValues]);
							}
						}
					]
				},
				{}
			]
		}
	}

	$getForm() {
		return this.$$("formForListContacts");
	}

	$getFormValues() {
		return this.$getForm().getValues();
	}
	
	ready() {
		this.on(this.app, "listContactItemSelect", (listContactItem) => {
			this.$getForm().setValues(listContactItem);
		});
		this.on(this.app, "clearFormForListContacts", () => {
			this.$getForm().clear();
		});
	}
}