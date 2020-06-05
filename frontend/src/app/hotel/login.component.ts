import {Component, AfterViewInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../backend/data.service";

@Component({
  selector: 'login-component',
  template: `
<form>

  <h2>Log In</h2>

  <div *ngIf="errorMessage" style="padding: 20px; background-color: #ffeeee;">{{errorMessage}}</div>

  <div class="space">
  A hotel where all your dreams come true.
  </div>

  <div class="space">
    <input type="text" [(ngModel)]="user.username" name="username" placeholder="Username">
  </div>
  <div class="space">
    <input type="password" [(ngModel)]="user.password" name="password" placeholder="Password">
  </div>
  <div class="space">
    <button (click)="login()">Log In</button>
  </div>
</form>
`,
  styles: [`

  h2 {
    color: white;
    margin-left: 18px;
  }
  input[type=text], input[type=password], select {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 30%;
  background-color: #4d85b3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #124b7a;
}

.space {
  border-radius: 5px;
  padding: 20px;
  color: white;
}
`]
})
export class LoginComponent implements AfterViewInit {

  user = {
    username: "",
    password: ""
  };

  errorMessage: string;

  constructor(private route: ActivatedRoute, private ds: DataService, private router: Router) {}

  ngAfterViewInit(): void {
  }

  login() {
    this.ds.doLogin(this.user).subscribe(result => {
      if (result.user) {
        let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        localStorage.setItem("user", JSON.stringify(result.user));
        this.router.navigate([returnUrl]);
      }
      else {
        this.errorMessage = "Login failed";
      }

    });
  }


}

