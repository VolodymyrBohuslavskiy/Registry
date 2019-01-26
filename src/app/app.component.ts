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
  message = false;
  message1 = false;
  emptyField;

  user = {username: null, email: null, password: null};


  login() {
    if (this.user.username == null || this.user.password == null || this.user.username === '' || this.user.password === '') {
      this.message1 = true;

      switch ('') {
        case this.user.username : {
          this.emptyField = 'username';
          break;
        }
        case this.user.password : {
          this.emptyField = 'password';
          break;
        }
        default : {
          this.emptyField = 'all';
        }
      }

    } else if (this.user.username !== null && this.user.password !== null) {
      this.message1 = false;
      console.log(this.user);
      this.hide();
      this.clearFields();
    }

  }

  registry(form: NgForm) {
    if (form.valid) {
      this.user = form.value;
      console.log(this.user);
      this.hide();
      form.reset();
      this.message = false;
    } else {
      this.message = true;
      this.user = form.value;
    }
    switch ('') {
      case this.user.username: {
        this.emptyField = 'username';
        break;
      }
      case this.user.email: {
        this.emptyField = 'email';
        break;
      }
      case this.user.password: {
        this.emptyField = 'password';
        break;
      }
      default : {
        this.emptyField = 'all';
      }

    }

  }

  clearFields() {
    this.user.username = null;
    this.user.password = null;
    this.user.email = null;
  }

  hide() {
    this.log = false;
    this.reg = false;
    this.message = false;
    this.message1 = false;
  }

  onLog() {
    this.log = true;
    this.reg = false;
  }

  onReg() {
    this.reg = true;
    this.log = false;
  }

}
