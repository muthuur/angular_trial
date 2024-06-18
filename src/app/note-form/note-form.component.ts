// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { NoteService } from '../note.service';
// import { Note } from '../note.service';

// @Component({
//   selector: 'app-note-form',
//   templateUrl: './note-form.component.html',
//   styleUrls: ['./note-form.component.css'],
// })
// export class NoteFormComponent implements OnInit {
//   note: Note = { id: 0, title: '', content: '' };
//   isEditMode = false;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private noteService: NoteService
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.isEditMode = true;
//       this.noteService.getNoteById(+id).subscribe((data: Note) => {
//         this.note = data;
//       });
//     }
//   }

//   saveNote(): void {
//     if (this.isEditMode) {
//       this.noteService.updateNote(this.note.id, this.note).subscribe(() => {
//         this.router.navigate(['/']);
//       });
//     } else {
//       this.noteService.createNote(this.note).subscribe(() => {
//         this.router.navigate(['/']);
//       });
//     }
//   }
// }
