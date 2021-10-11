
import {JetView} from "webix-jet";
import {contactsCollection} from "models/contacts";
import FormForListContactsView from "views/formForListContacts";

export default class StartView extends JetView{
	config() {
		const _ = this.app.getService("locale")._;
		return {
			cols: [
				{
					rows: [
						{
							view: "list",
							localId: "listContacts",
							select: true,
							template: `#id#. #Name#, #Email#, ${_("status")} #Status#, ${_("country")} #Country# <span class='on_click_delete webix_icon wxi-close'></span>`,
							onClick: {
								on_click_delete: (e, id) => {
									contactsCollection.remove(id);
									this.app.callEvent("clearFormForListContacts");
									this.app.show("/top/start");
									return false;
								},
							},
							on: {
								onAfterSelect: (row) => {
									const listContactItem = this.$getListContacts().getItem(row);
									this.app.callEvent("listContactItemSelect", [listContactItem]);
								}
							}
						},
						{
							cols: [
								{
									view: "button",
									type: "form",
									value: _("Add contact"),
									width: 200,
									align: "right",
									click:() => {
										let idNewListContactItem = this.$getListContacts().count();
										idNewListContactItem++;
										contactsCollection.add(
											{ 
												id: idNewListContactItem,
												Name: "New name",
												Email: "New Email",
												Status: "New status",
												Country: "New country",
											}
										);
										this.$getListContacts().select(idNewListContactItem);
									}
								},
								{}
							]
						},
					]
				},
				FormForListContactsView
			]
		}
	}

	init() {
		this.$getListContacts().sync(contactsCollection);
	}

	$getListContacts() {
		return this.$$("listContacts");
	}

	ready() {
		this.on(this.app, "onListContactItemUpdate", (listContactItemValues) => {
			const selectedListContactItem = this.$getListContacts().getSelectedId();
			contactsCollection.updateItem(selectedListContactItem, listContactItemValues);
		});
		this.on(this.$getListContacts(), "onAfterSelect", id =>
			this.show(`start?id=${id}`)
		);
		const contactId = this.getParam("id");
		if (contactId) {
			this.$getListContacts().select(contactId);
		}
		else {
			const firstContactId = this.$getListContacts().getFirstId();
			this.$getListContacts().select(firstContactId);
		}
	}
}