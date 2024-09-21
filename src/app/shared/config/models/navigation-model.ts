export interface NavigationModel{
  value: string,
  label: string,
  items?: any[],
  link: string,
  featured?: NavigationModel[]
}
