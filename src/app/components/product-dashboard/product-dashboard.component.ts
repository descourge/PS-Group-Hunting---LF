import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../product.model';
import { ProductService } from '../../services/product.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [CommonModule, NgbModalModule, ReactiveFormsModule],
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  private productService = inject(ProductService);
  private modalService = inject(NgbModal);
  public products$!: Observable<Product[]>;

  private fb = inject(FormBuilder);
  public productForm!: FormGroup;

  public showSuccessView = false;

  ngOnInit(): void {
    this.loadProducts();

    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]], 
      stock: [0, [Validators.required, Validators.min(1)]]
    });
  }

  loadProducts(): void {
    this.products$ = this.productService.getProducts();
  }

  onDeleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  open(content: any) {
    this.showSuccessView = false;
    this.productForm.reset({ stock: 1 });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      // Fuerzo la validación de los campos (requerido para Stock)
      this.productForm.markAllAsTouched();
      return;
    }
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (newProduct) => {
        console.log('Producto agregado con éxito:', newProduct);
        this.loadProducts();
        this.showSuccessView = true;

        // Timeout requerido para ejecutar animación de éxito
       setTimeout(() => {
          this.modalService.dismissAll();
        }, 2000);
        this.productForm.reset({ stock: 1 });
      },
      error: (err) => {
        console.error('Error al agregar el producto:', err);
      }
    });
  }
}