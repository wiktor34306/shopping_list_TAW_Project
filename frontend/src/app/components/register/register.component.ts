import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public credentials = {
	name: '',
	email: '',
	password: '',
  };

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  create() {
this.authService.createOrUpdate(this.credentials).subscribe((result) => {
  	return result;
	});
	this.router.navigate(['/']);
  }
}
