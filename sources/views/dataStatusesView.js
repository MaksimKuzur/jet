
import {JetView} from "webix-jet";
import {statuses} from "models/statuses";

export default class DataStatusesView extends JetView {
	config() {
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
							id: "Name",
							editor: "text"
						},
						{
							id: "Icon",
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
							label: "Name",
							name: "Name"
						},
						{ 
							view: "text",
							label: "Icon",
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
		this.$$("tableStatuses").parse(statuses);
		this.$$("formForStatuses").bind(this.$$("tableStatuses"));
	}
}