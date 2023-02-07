export class MenuModel {
  id!:number;
  name!: string; 
  iconClass!: string;
  active!: boolean;
  submenu!: { id:number, name: string, url: string }[];

  constructor(courseModuleFromApi:any) {
    this.id = courseModuleFromApi.id;
    this.name = courseModuleFromApi.name;
    this.iconClass = 'fas fa-book';
    this.active = false;
    this.submenu = createSubMenu(courseModuleFromApi.lessons)
  }

}

function createSubMenu(lessons:any[]) {
  let arr = [];
  for(let lesson of lessons) {
    arr.push({id: lesson.id, name:lesson.name, url:'#'})
  }
  return arr;
}
