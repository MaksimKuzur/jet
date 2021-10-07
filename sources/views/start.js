
import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

export default class StartView extends JetView{
	config() {
		return {
			cols: [
				{
					view: "list",
					localId: "listContacts",
					template: "#id#. #Name#, #Email#, status #Status#, country #Country#"
				},
				{
					view: "form",
					elements: [
						{
							view: "text",
							label: "Name",
							name: "Name",
							placeholder: "Type here.."
						},
						{
							view: "text",
							label: "Email",
							name: "Email"
						}, 
						{
							view: "richselect",
							label: "Status",
							name: "Status"
						}, 
						{
							view: "text",
							label: "Country",
							name: "Country"
						},
						{
							margin: 20,
							cols: [
								{
									view: "button",
									type: "form",
									value: "Add",
									width: 200,
									align: "right"
								},
								{
									view: "button",
									type: "form",
									value: "Del",
									width: 200,
									align: "right"
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
		this.$getListContacts().parse(contacts);
	}
	$getListContacts() {
		return this.$$("listContacts");
	}
}