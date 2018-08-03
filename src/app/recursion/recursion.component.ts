import { Component } from '@angular/core';
//import{ TreeViewComponent } from '../tree-view/tree-view.component';
import { Directory } from '../shared/directory';

@Component({
  selector: 'my-tree-view',
  templateUrl: './recursion.component.html',
  styles: []
})
export class RecursionComponent {
  directories: Array<any>;
  constructor() {
    let fall2014 = new Directory('Fall 2014', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
    let summer2014 = new Directory('Summer 2014', [], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
    let pics = new Directory('Pictures', [summer2014, fall2014], []);
    let music = new Directory('Music', [], ['song1.mp3', 'song2.mp3']);
    this.directories = [pics, music];
  }
}
