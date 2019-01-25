import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-1';

  reg = false;
  log = false;

  user = {username: null, email: null, password: null};

  clearFields() {
    this.user.username = null;
    this.user.password = null;
    this.user.email = null;
  }

  hide() {
    this.log = false;
    this.reg = false;
  }

  onLog() {
    this.log = true;
    this.reg = false;
  }

  onReg() {
    this.reg = true;
    this.log = false;
  }

  registry(form: NgForm) {
    this.user = form.value;
    console.log(this.user);
    this.hide();
    form.reset();
  }

  login() {
    console.log(this.user);
    this.hide();
  }

}
