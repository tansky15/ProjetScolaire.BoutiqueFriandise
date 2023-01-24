import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friandise } from 'src/app/models/friandise.model';
import { Router } from '@angular/router';
import { FriandiseService } from 'src/app/services/friandises.service';
@Component({
  selector: 'app-friandise-details',
  templateUrl: './friandise-details.component.html',
  styleUrls: ['./friandise-details.component.css']
})
export class FriandiseDetailsComponent implements OnInit {
  //constructor(private route: ActivatedRoute) { }
  currentFriandise:Friandise = {
    _id:'',
    brand:'',
    compagnie:'',
    price:'',
  };
  constructor(private friandiseService: FriandiseService,private route:ActivatedRoute,
    private router:Router) { }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getFriandise(this.route.snapshot.paramMap.get('id'));
  }

  getFriandise(_id:any):void{
    this.friandiseService.findById(_id).subscribe({
      next:(data)=>this.currentFriandise=data,
      error:(e)=>console.error(e)
    })
  }
  deleteFriandise(_id:any):void{
     this.friandiseService.deleteFriandise(this.currentFriandise._id)
     .subscribe({
       next:()=>console.log("Delete done"),
      // error:(e)=>console.error(e),
       complete: ()=> this.router.navigate(['/friandises'])
     });
  }
  cancelFriandise():void{
    console.log("Cancel")
    this.router.navigate(['/friandises'])
  }

  updateFriandise(): void{
    this.friandiseService.update(this.currentFriandise._id,this.currentFriandise)
    .subscribe({
      next:()=>console.log("update done"),
      complete: ()=> this.router.navigate(['/friandises']),
      error:(e)=>console.error(e)
      });
      //location.href="./friandises";
  }


}
