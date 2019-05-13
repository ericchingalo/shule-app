import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: FormGroup;
  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      phone: new FormControl('', [Validators.required]),
      password: new FormGroup({
        pass1: new FormControl('', [Validators.minLength(4), Validators.required]),
        pass2: new FormControl('', [Validators.minLength(4), Validators.required])
      })
    });
    }

    onSubmit(user: any) {
      console.log('Submit');
    }

}
