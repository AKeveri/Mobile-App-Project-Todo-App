import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['Work', 'Personal', 'Shopping']

  taskName: string = '';
  taskDate: Date = new Date();
  taskPriority: string = '';
  taskCategory: string = '';

  taskObject: any;

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
   await this.modalCtrl.dismiss(this.taskObject)

  }
  selectedCategory(index: number){
    this.taskCategory = this.categories[index]
  }

  AddTask(){
    this.taskObject = {itemName:this.taskName, itemDueDate:this.taskDate, 
                        itemPriority:this.taskPriority, itemCategory:this.taskCategory, completed: false
                      };
          this.dismiss()
  }

}
