import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('title') title: ElementRef
  @ViewChild('content') content: ElementRef
  constructor() { }
  isEditMode: boolean;

  
  public set editMode(v : boolean) {
    this.isEditMode = v;
    this.title.nativeElement.disabled = !v
    this.content.nativeElement.contenteditable = v
  }
  
  
  ngOnInit(): void {
  }

  private toggleEditableText(){
    this.editMode = !this.isEditMode
  }

}
