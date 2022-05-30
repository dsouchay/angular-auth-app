import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {

  miFormulario: FormGroup = this.fb.group({
    name:['Test 4',[Validators.required]],
    password:['123456',[Validators.required, Validators.minLength(6)]],
    email:['test4@test.com',[Validators.required, Validators.email]],
  })

  constructor(private fb:FormBuilder,
              private router:Router,
              private auth:AuthService) { }

  register(){
    const { name='' , email=''  , password=''  } = this.miFormulario.value || {}
    this.auth.registro(name , email , password )
    .subscribe( ok  => {
      if (ok === true){
      this.router.navigateByUrl('/dashboard');
    }else{
      //todo Menaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: ok,
      })
    }
    })
  }

}
