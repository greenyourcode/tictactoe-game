import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  @Input() indexCase;
  @Input() value;
  @Output() clickCaseAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
