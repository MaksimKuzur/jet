
import {JetView} from "webix-jet";
import {countries} from "models/countries";

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
							id: "value",
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
							name: "value"
						},
						{
							margin: 20,
							cols: [
								{
									view: "button",
									value: _("Add"),
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
		this.$getFormForCountries().bind(this.$getTableCountries());
	}

	$getTableCountries() {
		return this.$$("tableCountries");
	}
	
	$getFormForCountries() {
		return this.$$("formForCountries");
	}
}