import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  router: any;



  infoventa(): void {
    this.router.navigateByUrl('/infoventa');
}

contacto(): void {
    this.router.navigateByUrl('/contacto');
}

about(): void {
      this.router.navigateByUrl('/about');
}
}
