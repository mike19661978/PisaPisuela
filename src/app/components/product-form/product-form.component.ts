import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  successMessage: boolean=false;
  productForm: FormGroup;
  
constructor
(private fb: FormBuilder,

private productService: ProductosService,
private router: Router){
this.productForm= this.fb.group({
      id: ['', Validators.required],
      idtipoDeProducto: ['',Validators.required],
      idTalle: ['',Validators.required],
      idColor: ['',Validators.required],
      idColegio: ['',Validators.required],
      idtipoDeTela: ['',Validators.required],
      cantidadEnStock: ['',Validators.required],
      precioUnitario: ['',Validators.required],
  
    });}
    ngOnInit(): void{
       }
       onSubmit(): void{
    if(this.productForm.valid){
      this.productService.createProduct(this.productForm.value).subscribe(
        (productCreated) => {
          if(productCreated){
            this.successMessage = true;
            this.productForm.reset();
            setTimeout(() => (this.successMessage = false), 3000);
            this.router.navigate(['/loans/add']);
          } else {
            throw new Error('Error desconocido al crear producto');
          }
        },
        (error) => console.error('Error al añadir el producto:', error)
      );

    }else {
      console.log('El formulario es inválido');
    }
  }
}





