
import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const header = {
			type: "header",
			template: _(this.app.config.name),
			css: "webix_header app_header"
		};

		const menu = {
			view: "menu",
			id: "topMenu",
			css: "app_menu",
			width: 180,
			layout: "y",
			select: true,
			template: "<span class='webix_icon #icon#'></span> #value# ",
			data: [
				{
					value: _("Contacts"),
					id: "start",
					icon: "wxi-columns"
				},
				{
					value: _("Data"),
					id: "data",
					icon: "wxi-pencil"
				},
				{
					value: _("Settings"),
					id: "settings",
					icon: "wxi-pencil"
				}
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
		this.use(plugins.Menu, "topMenu");
	}
}