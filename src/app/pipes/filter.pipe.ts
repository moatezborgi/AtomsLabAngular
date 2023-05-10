import { Pipe, PipeTransform } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private aRoute:ActivatedRoute,
              private route:Router){}
  username=this.aRoute.snapshot.routeConfig?.path;

  transform(table: any[], searchTerm: string): any[] {
    if (!table || !searchTerm) {
      return table || [];
    }
    if(this.username==="HolidayList/:username"){
      searchTerm = searchTerm.toLowerCase();
      return table.filter(item =>
        item.reason.toLowerCase().includes(searchTerm)
        || item.startDate.toLowerCase().includes(searchTerm)
        || item.endDate.toLowerCase().includes(searchTerm)
        || item.typeHoliday.toLowerCase().includes(searchTerm)

      );
    }
    if(this.username==="DutyList/:username"){
    searchTerm = searchTerm.toLowerCase();
    return table.filter(item =>
      item.user.username.toLowerCase().includes(searchTerm)
      || item.dateHeureDebut.toLowerCase().includes(searchTerm)
      || item.dateHeureFin.toLowerCase().includes(searchTerm)
      || item.duty.type.toLowerCase().includes(searchTerm)
    );
  }
    if(this.username==="Reclamation/:username"){
      searchTerm = searchTerm.toLowerCase();
      return table.filter(item =>
        item.user.username.toLowerCase().includes(searchTerm)
        || item.dateHeureReclamation.toLowerCase().includes(searchTerm)
        || item.descReclamation.toLowerCase().includes(searchTerm)
      );
    }
    return table;
  }
}
