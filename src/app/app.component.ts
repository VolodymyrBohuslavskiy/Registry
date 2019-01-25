import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-1';

  user = {username: null, email: null, password: null};

  registry(form: NgForm) {
    this.user = form.value;
    console.log(this.user);
  }

  login() {
    console.log(this.user);
  }

}
