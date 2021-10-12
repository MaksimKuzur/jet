
import {JetView} from "webix-jet";
import {statuses} from "models/statuses";

export default class DataStatusesView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			cols: [
				{
					gravity: 3,
					localId: "tableStatuses",
					view: "datatable",
					editable: true,
					scrollX: false,
					select: false,
					columns: [
						{
							id: "value",
							header: _("Status"),
							editor: "text"
						},
						{
							id: "Icon",
							header: _("Icon"),
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
					localId: "formForStatuses",
					elements: [
						{
							view: "text",
							label: _("Name"),
							name: "value"
						},
						{ 
							view: "text",
							label: _("Icon"),
							name: "Icon"
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
		this.$getTableStatuses().parse(statuses);
		this.$getFormForStatuses().bind(this.$getTableStatuses());
	}

	$getTableStatuses() {
		return this.$$("tableStatuses");
	}
	
	$getFormForStatuses() {
		return this.$$("formForStatuses");
	}
}