import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  todoList: any[] = []
  
  today : number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  deleteTask(item: any) {
    const index = this.todoList.indexOf(item);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  }

 completeTask(item: any) {
  item.completed = true;
}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then((newTaskObj) => {
      if (newTaskObj.data) {
        newTaskObj.data.completed = false; 
        this.todoList.push(newTaskObj.data);
      }
    });

    return await modal.present()

  }
  

}
