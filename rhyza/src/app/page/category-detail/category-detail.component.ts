import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {
  MatCard,
  MatCardHeader,
  MatCardSmImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {MaterialModule} from '../../shared/material.module';
import {ActivatedRoute} from '@angular/router';
import {CategoryModel} from '../../models/category.model';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [
  MaterialModule
  ],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss'
})
export class CategoryDetailComponent {
}
