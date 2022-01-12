import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  // formUser:any

  constructor(
    private fb: FormBuilder,
    ) { }

    public formUser = this.fb.group({
        nome: [ '',Validators.required]
  
      });

  ngOnInit() {
    this.formUser.valueChanges.subscribe(()=>{
      console.log("Alterado: ",this.formUser.value)
    })
  }

}
