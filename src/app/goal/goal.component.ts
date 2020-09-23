import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'Watch finding Nemo','Find a version online', new Date(2019,6,28)),
    new Goal(2,'Buy Cookies','Some good cookies',new Date(2019,6,27)),
    new Goal(3,'Get a new phone case','For someone else', new Date(2019,6,26)),
    new Goal(4,'Get dog food','For the dogs', new Date(2019,6,25)),
    new Goal(5,'Solve math homework','Help them with their work', new Date(2019,6,24)),
    new Goal(6,'Something else','Find a version of something', new Date(2019,6,21)),
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription
  }
  /*completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }*/
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
      this.goals.splice(index, 1);
      }
    }
  }
  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength+1
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
