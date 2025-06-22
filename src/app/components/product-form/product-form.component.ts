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

    // ✅ Buscar ID más alto y autocompletar
    this.productService.getProducts().subscribe(productos => {
      const nuevoId = this.generarNuevoId(productos);
      this.productForm.get('id')?.setValue(nuevoId);
      this.productForm.get('id')?.disable(); // Opcional: evitar que el usuario lo modifique
    });
  }

  generarNuevoId(productos: any[]): string {
  let max = 0;

  productos.forEach(p => {
    const match = p.id.match(/^prod(\d+)$/);
    if (match) {
      const numero = parseInt(match[1], 10);
      if (numero > max) {
        max = numero;
      }
    }
  });

  const nuevoNumero = (max + 1).toString().padStart(3, '0');
  return `prod${nuevoNumero}`;
}


 onSubmit(): void {
  if (this.productForm.valid) {
    // Habilitás temporalmente para acceder al valor
    this.productForm.get('id')?.enable();

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

    this.productService.createProduct(productoConIds).subscribe(() => {
      this.router.navigate(['/products/view']);
    });
  }
}


cancelar(): void {
    this.router.navigate(['/products/view']);
  }
}