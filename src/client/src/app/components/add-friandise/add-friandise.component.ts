import { Component, OnInit } from '@angular/core';
import { Friandise } from 'src/app/models/friandise.model';
import { FriandiseService } from 'src/app/services/friandises.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-add-friandise',
  templateUrl: './add-friandise.component.html',
  styleUrls: ['./add-friandise.component.css']
})
export class AddFriandiseComponent implements OnInit {
  friandise:Friandise={
    brand:'',
    compagnie:'',
    price:'',
  };
  constructor(private friandiseService:FriandiseService,
    private route:ActivatedRoute,
    private router:Router) { }
  ngOnInit(): void {
  }

  saveFriandise():void{
    const data = {
      brand: this.friandise.brand,
      compagnie: this.friandise.compagnie,
      price: this.friandise.price,
    };
    this.friandiseService.create(data).subscribe({
      next: ()=> console.log("Ajout fait"),
      error: (e)=> console.error(e),
      complete: ()=> this.router.navigate(['/friandises'])
    })
  }

}


