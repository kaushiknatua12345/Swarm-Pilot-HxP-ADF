import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css'],
})
export class AddEditCustomerComponent implements OnInit {
  addCustomerForm: FormGroup | any;

  /**
   *
   */
  constructor(
    public dialogRef: MatDialogRef<AddEditCustomerComponent>,
    private service: CustomerServiceService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public incomingData: any
  ) {}

  ngOnInit(): void {
    this.addCustomerForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
  })
  this.addCustomerForm.patchValue(this.incomingData);
  }

  public closePopup() {
    this.dialogRef.close();
    this.addCustomerForm.reset();
  }

  public addCustomer() {
    if (this.incomingData && this.incomingData.action && this.incomingData.action === 'edit') {
      this.service.editCustomer(this.incomingData.id, this.addCustomerForm.value);
      this.dialogRef.close();
    } else {
      this.service.addCustomer(this.addCustomerForm.value);
      this.dialogRef.close();
    }
  }

  public deleteCustomer() {
    this.dialogRef.close(true);
  }

  public cancelDelete() {
    this.dialogRef.close(false);
  }
}
