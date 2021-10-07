
import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class DataCountriesView extends JetView {
	config() {
		return {
			cols: [
				{
					gravity: 3,
					localId: "tableCountries",
					view: "datatable",
					editable: true,
					scrollX: false,
					select: false,
					columns: [
						{
							id: "Name",
							fillspace: true,
							editor: "text"
						},
						{
							id: "del",
							header: "",
							template: "<span class='on_click_delete webix_icon wxi-trash'></span>"
						},
					],
					onClick: {
						on_click_delete(e, id) {
							this.remove(id);
							return false;
						}
					},
				},
				{
					view: "form",
					localId: "formForCountries",
					elements: [
						{
							view: "text",
							label: "Country",
							name: "Name"
						},
						{
							margin: 20,
							cols: [
								{
									view: "button",
									value: "Add",
									css: "webix_primary",
									click() {
										this.getFormView().save()
									}
								}
							]
						},
						{}
					]
				}
			]
		}
	}
	init() {
		this.$getTableCountries().parse(countries);
		this.$getformForCountries().bind(this.$getTableCountries());
	}
	$getTableCountries() {
		return this.$$("tableCountries");
	}
	$getformForCountries() {
		return this.$$("formForCountries");
	}
}