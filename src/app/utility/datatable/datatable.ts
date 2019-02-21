import { DatatableComponent } from '@swimlane/ngx-datatable';

export class Datatable {

  rows          = [];
  selected      = [];
  temp          = [];
  expanded: any = {};

  search_value: string = null;
  is_search_active     = false;
  is_toolbar_active    = false;
  items_selected       = '';
  item_count           = 0;

  private _table: DatatableComponent;

  /**
   * contructor
   */
  constructor () {

  }

  /**
   * Setter
   * @param {DatatableComponent} table
   */
  set table (table: DatatableComponent) {
    this._table = table;
  }

  /**
   * Search for the value being searched for in the each column and row
   * @param event
   */
  updateFilter (event) {

    const val  = event.target.value.toLowerCase();
    const keys = Object.keys(this.temp[0]);

    const rows = this.temp.filter(function (d) {

      for (let i = 0; i < keys.length; i++) {

        if (String(d[keys[i]]).toLowerCase().toLowerCase().indexOf(val) !== -1 || !val) {
          return true;
        }
      }
    });

    this._table.offset = 0;
    this.rows          = rows;
  }

  /**
   * Perform actions for checkbox select
   * @param {any} selected
   */
  onSelect ({selected}) {

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if (selected.length > 0) {

      this.items_selected    = selected.length === 1 ? 'Item Selected' : 'Items Selected';
      this.is_toolbar_active = true;
      this.item_count        = selected.length;
    } else {

      this.is_toolbar_active = false;
    }
  }

  /**
   * Reset table back to defaults
   * @param data
   */
  onGetData (data: any) {

    this.rows              = data;
    this.temp              = [...data];
    this.selected          = [];
    this.is_toolbar_active = false;
    this.is_search_active  = false;
  }

  /**
   * Trigger the close event for the toolbar
   */
  triggerClose () {
    this.rows             = this.temp;
    this.search_value     = '';
    this.is_search_active = false;
  }
}
