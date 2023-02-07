export type Menu = {
  id: number;
  name: string, 
  iconClass: string, 
  active: boolean,
  submenu: { id: number, name: string, url: string }[]
}