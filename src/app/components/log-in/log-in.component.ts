import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(user: any) {
    console.log('welcome', user.value.name);
    this.router.navigate(['/home']);
  }

}
