import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { GlobalLoadingService } from '../../services/global-loading.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!:FormGroup;
  public loadingService = inject(GlobalLoadingService); // Inject here
  private postService = inject(PostService);
  private route = inject(Router);


  ngOnInit():void{
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('',Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    
    if (this.form.invalid) return;

    this.postService.create(this.form.value).subscribe((res:any)=>{
      
      alert("Post Created Successfull!.");
      this.route.navigateByUrl('post/index');
    })
  }
}
