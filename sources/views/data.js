import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class DataView extends JetView{
	config(){
		return {
			rows: [
				{
					view:"tabbar", id:'tabbar',
					multiview: true, options: [
						{ value: 'Countries', id: 'tabCountries'},
						{ value: 'Statuses', id: 'tabStatuses'}
					]
				},
				{
					cells: [
						{
							id: "tabCountries",
							cols: [
								{
									gravity:3,
									id:"tableCountries",
									view:"datatable",
									editable:true,
									scrollX: false,
									select: false,
									columns: [
										{ id: "Name", fillspace: true, editor:"text"},
										{ id: "del", header: "", template: "<span class='on_click_delete webix_icon wxi-trash'></span>" },
									],
									onClick: {
										"on_click_delete": function(e, id) {
											this.remove(id);
											return false;
										}
									},
								},
								{
									view:"form", id: "formForCountries",
									elements:[
										{ view:"text", label:"Country", name:"Name"},
										{ margin:20, cols:[
											{
												view:"button",
												value:"Add",
												css: "webix_primary",
												click() {
													$$("formForCountries").save()
												}
											}
										]},
										{}
									]
								}
							]
						},
						{
							id: "tabStatuses",
							cols: [
								{
									gravity:3,
									id:"tableStatuses",
									view:"datatable",
									editable:true,
									scrollX: false,
									select: false,
									columns: [
										{ id: "Name", editor:"text"},
										{ id: "Icon", fillspace: true, editor:"text"},
										{ id: "del", header: "", template: "<span class='on_click_delete webix_icon wxi-trash'></span>" },
									],
									onClick: {
										"on_click_delete": function(e, id) {
											this.remove(id);
											return false;
										}
									},
								},
								{
									view:"form", id: "formForStatuses",
									elements:[
										{ view:"text", label:"Name", name:"Name"},
										{ view:"text", label:"Icon", name:"Icon"},
										{ margin:20, cols:[
											{
												view:"button",
												value:"Add",
												css: "webix_primary",
												click() {
													$$("formForStatuses").save()
												}
											}
										]},
										{}
									]
								}
							]
						},
					]
				}
			]
		}
	}
	init() {
		this.$$("tableCountries").parse(countries);
		this.$$("tableStatuses").parse(statuses);
		$$("formForCountries").bind($$("tableCountries"));
		$$("formForStatuses").bind($$("tableStatuses"));
	}
}