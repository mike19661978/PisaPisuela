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

 successMessage: boolean=true;
  productForm: FormGroup;

    tiposDeProducto: any[] = [];
    talles: any[] = [];
    colores: any[] = [];
    colegios: any[] = [];
    tiposDeTela: any[] = [];

  
    constructor(private fb: FormBuilder,
      private productService: ProductosService,
      private router: Router)
      {
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

    ngOnInit(): void {
      this.productService.getTiposDeProducto().subscribe(data => this.tiposDeProducto = data);
      this.productService.getTalles().subscribe(data => this.talles = data);
      this.productService.getColores().subscribe(data => this.colores = data);
      this.productService.getColegios().subscribe(data => this.colegios = data);
      this.productService.getTiposDeTela().subscribe(data => this.tiposDeTela = data);
  }

 onSubmit(): void {
  if (this.productForm.valid) {
    const formValue = this.productForm.value;

    const productoConIds = {
      id: formValue.id,
      idtipoDeProducto: formValue.idtipoDeProducto,
      idtalle: formValue.idTalle,
      idcolor: formValue.idColor,
      idcolegio: formValue.idColegio,
      idtipoDeTela: formValue.idtipoDeTela,
      cantidadEnStock: formValue.cantidadEnStock,
      precioUnitario: formValue.precioUnitario
    };

    this.productService.createProduct(productoConIds).subscribe(
      (productCreated) => {
        if (productCreated) {
          this.successMessage = true;
          this.productForm.reset();
          setTimeout(() => (this.successMessage = false), 3000);
        } else {
          throw new Error('Error desconocido al crear producto');
        }
      },
      (error) => console.error('Error al añadir el producto:', error)
    );
  } else {
    console.log('El formulario es inválido');
  }
}
}