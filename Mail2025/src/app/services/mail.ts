import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mail {
  public statusList: string[] = [];
  public iconList: string[] = [];
  public emailList: any[] = [];
  public filteredEmailList: any[] = [];

  constructor(){
    this.populateIconList();
    this.populateStatusList();
    this.populateEmailList();
  }

  populateStatusList(){
    this.statusList = ["unread","read","sent","favorites","archives","deleted","spam"];
  }

  populateIconList(){
    this.iconList = ["mail","mail-open","paper-plane","heart","archive","trash","warning"];
  }

  populateEmailList(){
    this.emailList = [
    {
      id:1,
      subject:"Subject Joe Borg",
      from:"joeborg@gmail.com",
      fromName:"Joe Borg",
      message:"This is the full email message from Joe Borg",
      status:0,
      icon:0
    },
    {
      id:2,
      subject:"Subject Mary Borg",
      from:"maryborg@gmail.com",
      fromName:"Mary Borg",
      message:"This is the full email message from Mary Borg",
      status:0,
      icon:0
    },
    {
      id:3,
      subject:"Subject Nigerian Prince",
      from:"nigerianprince@gmail.com",
      fromName:"Nigerian Prince",
      message:"This is the full email message from Nigerian Prince",
      status:6,
      icon:6
    },
    {
      id:4,
      subject:"Subject Nesquik",
      from:"nesquik@gmail.com",
      fromName:"Nannuk Nesquik",
      message:"This is the full email message from Nanuk Nesquik",
      status:1,
      icon:1
    },
    {
      id:5,
      subject:"Subject Qwerty",
      from:"qwerty@gmail.com",
      fromName:"Qwerty",
      message:"This is the full email message from Qwerty",
      status:2,
      icon:2
    },
    {
      id:5,
      subject:"Subject Iop",
      from:"iop@gmail.com",
      fromName:"Iop",
      message:"This is the full email message from Iop",
      status:3,
      icon:3
    },
    {
      id:6,
      subject:"Subject Zxcv",
      from:"zxcv@gmail.com",
      fromName:"Zxcv",
      message:"This is the full email message from Zxcv",
      status:4,
      icon:4
    },
    {
      id:7,
      subject:"Subject Ghjkl",
      from:"ghjkl@gmail.com",
      fromName:"Ghjkl",
      message:"This is the full email message from Ghjkl",
      status:6,
      icon:6
    },
    {
      id:8,
      subject:"Subject 741",
      from:"741@gmail.com",
      fromName:"741",
      message:"This is the full email message from 741",
      status:6,
      icon:6
    },
    {
      id:9,
      subject:"Subject for 852",
      from:"852@gmail.com",
      fromName:"852",
      message:"This is the full email message from 852",
      status:5,
      icon:5
    },
    {
      id:10,
      subject:"Subject 963",
      from:"963@gmail.com",
      fromName:"Nannuk Nesquik",
      message:"This is the full email message from 963",
      status:2,
      icon:2
    },
    {
      id:11,
      subject:"Subject for 789",
      from:"789@gmail.com",
      fromName:"789",
      message:"This is the full email message from 789",
      status:3,
      icon:3
    },
    {
      id:12,
      subject:"Subject 456",
      from:"456@gmail.com",
      fromName:"456",
      message:"This is the full email message from 456",
      status:3,
      icon:3
    },
    {
      id:13,
      subject:"Subject 123",
      from:"123@gmail.com",
      fromName:"Nannuk Nesquik",
      message:"This is the full email message from 123",
      status:4,
      icon:4
    },
    {
      id:14,
      subject:"Subject 987",
      from:"987@gmail.com",
      fromName:"987",
      message:"This is the full email message from 987",
      status:5,
      icon:5
    },
    {
      id:15,
      subject:"Subject 654",
      from:"654@gmail.com",
      fromName:"654",
      message:"This is the full email message from 654",
      status:2,
      icon:2
    },
    {
      id:16,
      subject:"Subject for 321",
      from:"321@gmail.com",
      fromName:"321",
      message:"This is the full email message from 321",
      status:2,
      icon:2
    },
    {
      id:17,
      subject:"Subject tyuiop",
      from:"tyuiop@gmail.com",
      fromName:"tyuiop",
      message:"This is the full email message from tyuiop",
      status:4,
      icon:4
    },
    {
      id:18,
      subject:"Subject fghjk",
      from:"fghjk4@gmail.com",
      fromName:"fghjk",
      message:"This is the full email message from fghjkl",
      status:6,
      icon:6
    },
    {
      id:19,
      subject:"Subject xcvbnm",
      from:"xcvbnm@gmail.com",
      fromName:"xcvbnm",
      message:"This is the full email message from xcvbnm",
      status:1,
      icon:1
    },
    {
      id:20,
      subject:"Subject asd",
      from:"asd@gmail.com",
      fromName:"asd",
      message:"asd",
      status:2,
      icon:2
    }
  ];
  }

  filterEmails(folder:string){
    switch(folder){
      case "Inbox":{
        this.filteredEmailList = this.emailList.filter(
          email => email.status == 1 ||
          email.status == 0 ||
          email.status == 3);
        break;
      }
      case "Sent":{
        this.filteredEmailList = this.emailList.filter(
          email => email.status == 2);
        break;
      }
      case "Favorites":{
        this.filteredEmailList = this.emailList.filter(
          email => email.status == 3);
        break;
      }
      case "Archived":{
        this.filteredEmailList = this.emailList.filter(
          email => email.status == 4);
        break;
      }
      case "Deleted":{
        this.filteredEmailList = this.emailList.filter(
          email => email.status == 5);
        break;
      }
      case "Spam":{
        this.filteredEmailList = this.emailList.filter(
          email => email.status == 6);
        break;
      }
      default :{
        this.filteredEmailList = this.emailList.filter(
          email => email.status == 0 ||
          email.status == 1 ||
          email.status == 3);
        break;
      }
    }
  }

  newMail(subject:string, from:string, fromName:string, message:string){
    this.emailList.push({
      id:1,
      subject:subject,
      from:from,
      fromName:fromName,
      message:message,
      status:0,
      icon:0
    });

  }

  setStatus(emailId:number,statusId:number){
    this.emailList.find(x => x.id == emailId).status = statusId;
    this.emailList.find(x => x.id == emailId).icon = statusId;
  }
}
