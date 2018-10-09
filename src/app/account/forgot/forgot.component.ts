import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {fallIn, moveIn} from 'angular-router-animations';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [moveIn(), fallIn()]
})
export class ForgotComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, CustomValidators.email])]
    });
  }

  onSubmit() {
    this.router.navigate(['/session/signin']);
  }

}
