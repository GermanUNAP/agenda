import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  const auth = getAuth(app);
  constructor(public auth: Auth) {

  }
  handleRegister(value: any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      })
  }
}
