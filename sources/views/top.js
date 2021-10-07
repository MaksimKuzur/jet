
import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		const header = {
			type: "header",
			template: this.app.config.name,
			css: "webix_header app_header"
		};

		const menu = {
			view: "menu",
			id: "top:menu", 
			css: "app_menu",
			width: 180,
			layout: "y",
			select: true,
			template: "<span class='webix_icon #icon#'></span> #value# ",
			data: [
				{
					value: "Contacts",
					id: "start",
					icon: "wxi-columns"
				},
				{
					value: "Data",
					id: "data",
					icon: "wxi-pencil"
				},
				{
					value: "Settings",
					id: "settings",
					icon: "wxi-pencil"
				},
			]
		};

		const ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			cols: [
				{
					paddingX: 5,
					paddingY: 10,
					rows: [
						{
							css: "webix_shadow_medium",
							rows: [
								header,
								menu
							]
						}
					]
				},
				{
					type: "wide",
					paddingY: 10,
					paddingX: 5,
					rows: [
						{ $subview: true } 
					]
				}
			]
		};

		return ui;
	}
	init() {
		this.use(plugins.Menu, "top:menu");
	}
}