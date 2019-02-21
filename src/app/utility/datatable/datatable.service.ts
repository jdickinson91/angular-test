import { Injectable } from '@angular/core';

/**
 * @deprecated
 */
@Injectable()
export class DatatableService {

  /**
   * Filter a datatable
   * @param event
   * @param data
   * @param table
   * @returns {any}
   */
  static filterRows (event, data, table) {
    const val  = event.target.value.toLowerCase();
    const keys = Object.keys(data[0]);

    const rows = data.filter(function (d) {

      for (let i = 0; i < keys.length; i++) {

        if (String(d[keys[i]]).toLowerCase().indexOf(val) !== -1 || !val) {
          return true;
        }
      }

      //return DatatableService.recursiveFilter(d, val, keys);
    });

    table.offset = 0;

    return rows;
  }

  static recursiveFilter(object, val, keys){

    for (let i = 0; i < keys.length; i++) {

      if(typeof object[keys[i]] === 'object' && object[keys[i]]){

        const obj_keys = Object.keys(object[keys[i]]);

        this.recursiveFilter(object[keys[i]], val, obj_keys);

      }else if (String(object[keys[i]]).toLowerCase().indexOf(val) !== -1 || !val) {
        return true;
      }
    }

    return false;
  }


  static updateFilterSpecificColumn(value, obj_properties: any, data, table){

    const rows = data.filter(function(d){

      let obj = d;
      for(let i = 0; i < obj_properties.length; i++){

        obj = obj[obj_properties[i]];
      }

      if(String(obj).toLowerCase() === value.toLowerCase()){
        return true;
      }

    });
    //table.offset = 0;
    return rows;
  }

  /**
   *
   * @param selected
   * @param selected_collection
   * @param toolbar_active
   * @param item_count
   * @param items_selected
   * @returns {{selected_collection: any; toolbar_active: any; item_count: any; items_selected: any}}
   */
  static onSelect (selected, selected_collection, toolbar_active, item_count, items_selected) {

    selected_collection.splice(0, selected_collection.length);
    selected_collection.push(...selected);

    if (selected.length === 1) {
      toolbar_active = true;
      item_count     = selected.length;
      items_selected = 'Item Selected';
    } else if (selected.length > 0) {
      toolbar_active = true;
      item_count     = selected.length;
      items_selected = 'Items Selected';
    } else {
      toolbar_active = false;
    }

    return {
      selected_collection: selected_collection,
      toolbar_active: toolbar_active,
      item_count: item_count,
      items_selected: items_selected
    }
  }

  constructor () {
  }

}
