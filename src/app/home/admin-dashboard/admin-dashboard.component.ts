import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  creditCardnum:string;

  dateForm = this.formBuilder.group({
    fromDate: [''],
    toDate: [''],
    monthRange: this.formBuilder.array([])
  });

  monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

  constructor(public formBuilder:FormBuilder) { 
    
  }

  ngOnInit() {
  }

  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) || this.creditCardnum.length == 19) {
        return false;
    }
    return true;
  }

  formatNumber(evt){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode != 8 && this.creditCardnum.length > 0 && (this.creditCardnum.length == 4 || this.creditCardnum.length == 9 || this.creditCardnum.length == 14)){
      this.creditCardnum += '-';
    }
  }

  // Get method of fromDate control
  get fromDate(){
    return this.dateForm.get('fromDate');
  }

  // Get method of toDate control
  get toDate(){
    return this.dateForm.get('toDate');
  }

  submitDate(){
    if(this.dateForm.get('fromDate').value && this.dateForm.get('toDate').value){
      let fromDate:Date = new Date(this.dateForm.get('fromDate').value);
      let toDate:Date = new Date(this.dateForm.get('toDate').value);
      let months = this.monthDiff((this.monthNames[fromDate.getMonth() % 12] + " " + fromDate.getFullYear()), (this.monthNames[toDate.getMonth() % 12] + " " + toDate.getFullYear()));
      const control = <FormArray>this.dateForm.controls.monthRange;

      // Remove all element
      control.controls = [];

      // Add new controls
      months.forEach(element => {
        control.push(this.addOtherSkillFormGroup(element));
      });
    }
  }

  addOtherSkillFormGroup(dateValue:string): FormGroup {  
    return this.formBuilder.group({  
      betweenDate: [dateValue]
    });  
  }

  monthDiff(from:string, to:string):any {
    var arr = [];
    var datFrom = new Date('1 ' + from);
    var datTo = new Date('1 ' + to);
    var fromYear =  datFrom.getFullYear();
    var toYear =  datTo.getFullYear();
    var diffYear = (12 * (toYear - fromYear)) + datTo.getMonth();

    for (var i = datFrom.getMonth(); i <= diffYear; i++) {
        arr.push(this.monthNames[i%12] + " " + Math.floor(fromYear+(i/12)));
    }        

    return arr;
  }
}
