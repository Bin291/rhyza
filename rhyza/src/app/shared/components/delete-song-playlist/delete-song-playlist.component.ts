import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MaterialModule} from '../../material.module';
import * as PlaylistActions from '../../../ngrx/playlist/playlist.actions';
import {Store} from '@ngrx/store';
import * as SongActions from '../../../ngrx/song/song.actions';

@Component({
  selector: 'app-delete-song-playlist',
  standalone: true,
    imports: [
        MaterialModule
    ],
  templateUrl: './delete-song-playlist.component.html',
  styleUrl: './delete-song-playlist.component.scss'
})
export class DeleteSongPlaylistComponent {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<DeleteSongPlaylistComponent>);

  constructor(private store: Store<{}>) {
    console.log(this.data)
  }

  deleteSongFromPlaylist() {
    if (this.data.uid && this.data.song.id && this.data.idToken && this.data.playlistId) {
      this.store.dispatch(SongActions.removeSongFromPlaylist({
        playlistId: this.data.playlistId,
        songId: this.data.song.id,
        uid: this.data.uid,
        idToken: this.data.idToken,
      }))
    }
  }
}
