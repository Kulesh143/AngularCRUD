import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { QKoolModel } from './qkool-dashboard.model'; 
import { ApiService } from '../sharedd/api.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-qkool-dashboard',
  templateUrl: './qkool-dashboard.component.html',
  styleUrls: ['./qkool-dashboard.component.css'],
 

})
export class QKoolDashboardComponent implements OnInit {

  
formValue!:FormGroup;
QkoolModelObj:QKoolModel=new QKoolModel();
qdata!:any;
showme:boolean=false;
showsin:boolean=false;
showsing:boolean=false;
showmull:boolean=false;
showmetwo:boolean=false;
showsintwo:boolean=false;
showsingtwo:boolean=false;
showmulltwo:boolean=false;
showmethree:boolean=false;
showsinthree:boolean=false;
showsingthree:boolean=false;
showmullthree:boolean=false;
showAdd!:boolean;
showsingAV:boolean=false;
showmullAV:boolean=false;
showsiAV:boolean=false;
showMAV:boolean=false;
showsingAVt:boolean=false;
showmullAVt:boolean=false;
showsiAVt:boolean=false;
showMAVt:boolean=false;
showsingAVw:boolean=false;
showmullAVw:boolean=false;
showsiAVw:boolean=false;
showMAVw:boolean=false;
selectedState!:number;
show = false;
constructor(private formBuilder:FormBuilder,private api:ApiService) { }
  ngOnInit(): void {
    this.formValue=this.formBuilder.group(
      {
        
        sectionName:[''],
    topicName:[''],
    questionOne:[''],
    questionOneType:[''],
    questionOneAnswer:[''],
    questionOneAnswerOne:[''],
    questionTwo:[''],
    questionTwoType:[''],
    questionTwoAnswer:[''],
    questionThree:[''],
    questionThreeType:[''],
    questionThreeAnswer:['']
      }
    )
    this.getAllSections();
    // this.toggle();
    // this.getquesone();
    //this.getquestwo();
    // this.getquethree();
    // this.getquefour();
  }
  
  postSectionDetails(){
    this.QkoolModelObj.sectionName=this.formValue.value.sectionName;
   
    this.api.postSectionName(this.QkoolModelObj).subscribe(res=>{
      console.log(res);
      alert("Section Added Successfully!")
      let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      window.location.reload();
    },err=>{
alert("Something went wrong!");
    })
  }
  postTopicDetails(){
    this.QkoolModelObj.topicName=this.formValue.value.topicName;
   
    this.api.postTopicName(this.QkoolModelObj).subscribe(res=>{
      console.log(res);
      alert("Topic Added Successfully!")
      let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      window.location.reload();
    },err=>{
alert("Something went wrong!");
    })
  }
  getAllSections(){
    this.api.getQkool().subscribe(res=>{
      this.qdata=res;
      
    })
    
  }
  updateQKoolDetails(row:any){
    this.QkoolModelObj.id=row.id;
    this.QkoolModelObj.sectionName=this.formValue.value.sectionName;
    this.QkoolModelObj.topicName=this.formValue.value.topicName;
    this.QkoolModelObj.questionOne=this.formValue.value.questionOne;
    this.QkoolModelObj.questionOneType=this.formValue.value.questionOneType;
    this.QkoolModelObj.questionOneAnswer=this.formValue.value.questionOneAnswer;
    this.QkoolModelObj.questionTwo=this.formValue.value.questionTwo;
    this.QkoolModelObj.questionTwoType=this.formValue.value.questionTwoType;
    this.QkoolModelObj.questionTwoAnswer=this.formValue.value.questionTwoAnswer;
    this.QkoolModelObj.questionThree=this.formValue.value.questionThree;
    this.QkoolModelObj.questionThreeType=this.formValue.value.questionThreeType;
    this.QkoolModelObj.questionThreeAnswer=this.formValue.value.questionThreeAnswer;
    this.api.updateQkool(this.QkoolModelObj,row.id).subscribe(res=>{
      alert("Topic Saved Successfully!");
      let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllSections();
        
    })
  }
  onEdit(row:any){
    // this.showAdd=false;
    // this.showUpdate=true;
    this.QkoolModelObj.id=row.id;
  this.formValue.controls['sectionName'].setValue(row.sectionName);
  this.formValue.controls['topicName'].setValue(row.topicName);
  this.formValue.controls['questionOne'].setValue(row.questionOne);
  this.formValue.controls['questionOneType'].setValue(row.questionOneType);
  this.formValue.controls['questionOneAnswer'].setValue(row.questionOneAnswer);
  this.formValue.controls['questionTwo'].setValue(row.questionTwo);
  this.formValue.controls['questionTwoType'].setValue(row.questionTwoType);
  this.formValue.controls['questionTwoAnswer'].setValue(row.questionTwoAnswer);
  this.formValue.controls['questionThree'].setValue(row.questionThree);
  this.formValue.controls['questionThreeType'].setValue(row.questionThreeType);
  this.formValue.controls['questionThreeAnswer'].setValue(row.questionThreeAnswer);
if(row.questionOneType=="MultiLine"){
  //alert("NO");
}
  
  
  
  
  }
  savesomething(){
    this.QkoolModelObj.sectionName=this.formValue.value.sectionName;
    this.QkoolModelObj.topicName=this.formValue.value.topicName;
    this.QkoolModelObj.questionOne=this.formValue.value.questionOne;
    this.QkoolModelObj.questionOneType=this.formValue.value.questionOneType;
    this.QkoolModelObj.questionOneAnswer=this.formValue.value.questionOneAnswer;
    this.QkoolModelObj.questionTwo=this.formValue.value.questionTwo;
    this.QkoolModelObj.questionTwoType=this.formValue.value.questionTwoType;
    this.QkoolModelObj.questionTwoAnswer=this.formValue.value.questionTwoAnswer;
    this.QkoolModelObj.questionThree=this.formValue.value.questionThree;
    this.QkoolModelObj.questionThreeType=this.formValue.value.questionThreeType;
    this.QkoolModelObj.questionThreeAnswer=this.formValue.value.questionThreeAnswer;
    
    this.api.postSectionName(this.QkoolModelObj).subscribe(res=>{
      console.log(res);
      alert("Section Added Successfully!")
      let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      window.location.reload();
    },err=>{
alert("Something went wrong!");
    })
  }
  // one
  usemulti(){
   this.showme=true;
   this.showsin=false;
   this.showsing=false;
   this.showmull=false;
    }
    usesin(){
      this.showsin=true;
      this.showme=false;
      this.showsing=false;
      this.showmull=false;
       }
       usesingl(){
        this.showsing=true;
        this.showme=false;
        this.showsin=false;
        this.showmull=false;
       }
       usemull(){
        this.showmull=true;
        this.showsing=false;
        this.showme=false;
        this.showsin=false;
       }

// two
usemultitwo(){
  this.showmetwo=true;
  this.showsintwo=false;
  this.showsingtwo=false;
  this.showmulltwo=false;
   }
   usesintwo(){
     this.showsintwo=true;
     this.showmetwo=false;
     this.showsingtwo=false;
     this.showmulltwo=false;
      }
      usesingltwo(){
       this.showsingtwo=true;
       this.showmetwo=false;
       this.showsintwo=false;
       this.showmulltwo=false;
      }
      usemulltwo(){
       this.showmulltwo=true;
       this.showsingtwo=false;
       this.showmetwo=false;
       this.showsintwo=false;
      }
      // three
      usemultithree(){
        this.showmethree=true;
        this.showsinthree=false;
        this.showsingthree=false;
        this.showmullthree=false;
         }
         usesinthree(){
           this.showsinthree=true;
           this.showmethree=false;
           this.showsingthree=false;
           this.showmullthree=false;
            }
            usesinglthree(){
             this.showsingthree=true;
             this.showmethree=false;
             this.showsinthree=false;
             this.showmullthree=false;
            }
            usemullthree(){
             this.showmullthree=true;
             this.showsingthree=false;
             this.showmethree=false;
             this.showsinthree=false;
            }
            // getquesone(){
            //   if(this.QkoolModelObj.questionOneType="SingleLine"){
            //      this.showsingAV=true;
            //      this.showmullAV=false;
            //      this.showsiAV=false;
            //      this.showMAV=false;
            //   }
            
            // }
            getquestwo(row:any){
              this.QkoolModelObj.id=row.id;
              this.formValue.controls['sectionName'].setValue(row.sectionName);
              this.formValue.controls['topicName'].setValue(row.topicName);
              this.formValue.controls['questionOne'].setValue(row.questionOne);
              this.formValue.controls['questionOneType'].setValue(row.questionOneType);
               this.formValue.controls['questionOneAnswer'].setValue(row.questionOneAnswer);
              this.formValue.controls['questionTwo'].setValue(row.questionTwo);
              this.formValue.controls['questionTwoType'].setValue(row.questionTwoType);
              this.formValue.controls['questionTwoAnswer'].setValue(row.questionTwoAnswer);
              this.formValue.controls['questionThree'].setValue(row.questionThree);
              this.formValue.controls['questionThreeType'].setValue(row.questionThreeType);
              this.formValue.controls['questionThreeAnswer'].setValue(row.questionThreeAnswer);
            if(row.questionOneType=="SingleLine"){
              this.showsingAV=true;
                 this.showmullAV=false;
                 this.showsiAV=false;
                 this.showMAV=false;
                 
            }
            if(row.questionOneType=="Single Choice"){
                   this.showsiAV=true;
                 this.showsingAV=false;
                 this.showmullAV=false;
                 this.showMAV=false;
            }
            if(row.questionOneType=="Multiple Choice"){
              this.showMAV=true;
                   this.showsingAV=false;
                   this.showmullAV=false;
                   this.showsiAV=false;
            }
            if(row.questionOneType=="MultiLine"){
              this.showmullAV=true;
              this.showMAV=false;
                   this.showsingAV=false;
                    this.showsiAV=false;
            }

            // aaaa two
            if(row.questionTwoType=="SingleLine"){
              this.showsingAVt=true;
                 this.showmullAVt=false;
                 this.showsiAVt=false;
                 this.showMAVt=false;
            }
            if(row.questionTwoType=="Single Choice"){
                   this.showsiAVt=true;
                 this.showsingAVt=false;
                 this.showmullAVt=false;
                 this.showMAVt=false;
            }
            if(row.questionTwoType=="Multiple Choice"){
              this.showMAVt=true;
                   this.showsingAVt=false;
                   this.showmullAVt=false;
                   this.showsiAVt=false;
            }
            if(row.questionTwoType=="MultiLine"){
              this.showmullAVt=true;
              this.showMAVt=false;
                   this.showsingAVt=false;
                    this.showsiAVt=false;
            }
            //aaaaa three
            if(row.questionThreeType=="SingleLine"){
              this.showsingAVw=true;
                 this.showmullAVw=false;
                 this.showsiAVw=false;
                 this.showMAVw=false;
            }
            if(row.questionThreeType=="Single Choice"){
                   this.showsiAVw=true;
                 this.showsingAVw=false;
                 this.showmullAVw=false;
                 this.showMAVw=false;
            }
            if(row.questionThreeType=="Multiple Choice"){
              this.showMAVw=true;
                   this.showsingAVw=false;
                   this.showmullAVw=false;
                   this.showsiAVw=false;
            }
            if(row.questionThreeType=="MultiLine"){
              this.showmullAVw=true;
              this.showMAVw=false;
                   this.showsingAVw=false;
                    this.showsiAVw=false;
            }
         
// let hh=row.questionOneType;
// let jj=row.questionOneAnswer;
// if(hh=="Multiple Choice"){
  

//   let gg = jj.split(',');
//   this.formValue.controls['questionOneAnswer'].setValue(gg[0]);
//   this.formValue.controls['questionOneAnswerOne'].setValue(gg[1]);
//   alert(gg[1]);
// }

            }
            // getquethree(){
            //   if(this.formValue.value.questionOneType=="Single Choice"){
            //      this.showsiAV=true;
            //      this.showsingAV=false;
            //      this.showmullAV=false;
            //      this.showMAV=false;
            //   }
            // }
            // getquefour(){
            //   if(this.formValue.value.questionOneType="MultipleChoice"){
            //      this.showMAV=true;
            //      this.showsingAV=false;
            //      this.showmullAV=false;
            //      this.showsiAV=false;
            
            //   }
            // }

            deleteQK(row:any){
              this.api.deleteQkool(row.id).subscribe(res=>{
                alert("Topic deleted!");
                this.getAllSections();
                
              })
                }
                goodtogo(){
                  let bb=this.formValue.value.questionOneType;

 let gg = bb.split(',');
 alert(gg);
                }
                
  
}
