import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  name: WritableSignal<string> = signal('Arian Josafat');
  disabled: boolean = false;
  img: string = 'https://avatars.githubusercontent.com/u/18092388?v=4';

  age: number = 25;

  clickHandle(): void {
    alert('Hello, ' + this.name);
  }

  inputHandle(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;

    this.name.set(newValue);
  }

  inputHandleKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    console.log(input.value, event.key);
  }
}
