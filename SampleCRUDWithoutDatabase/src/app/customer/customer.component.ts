import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';
import { CustomerServiceService } from '../customer-service.service';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'First Name',
    'Last Name',
    'Email',
    'Contact',
    'Action',
  ];
customerDetails: MatTableDataSource<Element> |any;


  ngOnInit(): void {}

  constructor(
    private service: CustomerServiceService,
    private dialog: MatDialog
  ) {}

  private getCustomers() {
    this.customerDetails = new MatTableDataSource<Element>(this.service.getCustomer());
  }

  public openPopup() {
    const dialogRef = this.dialog.open(AddEditCustomerComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getCustomers();
    });
  }

  public editCustomer(index:any, data:any) {
    data.id = index;
    data.action = 'edit';
    const dialogRef = this.dialog.open(AddEditCustomerComponent, {
      width: '350px',
      data: data
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getCustomers();
    });
  }

  public deleteCustomer(index:any) {
    const data = {
      action: 'delete'
    }
    const dialogRef = this.dialog.open(AddEditCustomerComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteCustomer(index);
        this.getCustomers();
      }
    });
  }
}
