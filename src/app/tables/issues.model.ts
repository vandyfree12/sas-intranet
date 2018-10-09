export class IssuesModel {
  public user: string;
  public title: string;
  public description: string;
  public assignto: string;
  public areasAffected: string;
  public status: string;
  public priority: string;
  public department: string;
  public datecompleted: string;
  public reportedby?: string;
  public imagePath?: string;

  constructor(user: string, title: string, description: string, assignto: string, areasAffected: string, status: string,
              priority: string, department: string, datecompleted: string, reportedby?: string, imagePath?: string ) {
    this.user = user;
    this.title = title;
    this.description = description;
    this.assignto = assignto;
    this.areasAffected = areasAffected;
    this.status = status;
    this.priority = priority;
    this.department = department;
    this.datecompleted = datecompleted;
    this.reportedby = reportedby;
    this.imagePath = imagePath;
  }
}
