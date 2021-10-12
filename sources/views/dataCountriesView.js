
import {JetView} from "webix-jet";
import {countriesCollection} from "models/countries";

export default class DataCountriesView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
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
							header: _("Country"),
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
							label: _("Country"),
							name: "Name"
						},
						{
							margin: 20,
							cols: [
								{
									view: "button",
									value: _("Add"),
									css: "webix_primary",
									click:() => {
										const countriesItemValues = this.getFormForCountriesValues();
										countriesCollection.add(countriesItemValues);
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
		this.$getTableCountries().sync(countriesCollection);
		this.$getFormForCountries().bind(this.$getTableCountries());
	}

	$getTableCountries() {
		return this.$$("tableCountries");
	}
	
	$getFormForCountries() {
		return this.$$("formForCountries");
	}

	getFormForCountriesValues() {
		return this.$getFormForCountries().getValues();
	}
}