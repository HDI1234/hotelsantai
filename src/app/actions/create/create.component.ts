import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  roomForm: FormGroup;

  ngOnInit() {
      this.roomForm = this.fb.group({
      type: [''],
      description: [''],
      price: [''],
      availability: ['']
    });
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public ActionsService: ActionsService
  ) { }

  submitForm() {
    this.ActionsService.create(this.roomForm.value).subscribe(res => {
      console.log('Room created!');
      this.router.navigateByUrl('/actions/home/')
    )}
  }
}
