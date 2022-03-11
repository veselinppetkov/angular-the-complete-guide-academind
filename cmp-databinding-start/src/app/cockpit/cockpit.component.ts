import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output(`bpCreated`) blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: contentInput.value,
  })
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
      this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value,
    })
  }

}
