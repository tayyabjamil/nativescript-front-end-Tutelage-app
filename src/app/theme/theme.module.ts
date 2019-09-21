import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ButtonComponent } from './component/button/button.component';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageService } from './services/page.service';
import { TextFieldComponent } from './component/textField/textField.component';
import { ImageUploadComponent } from './component/image-upload/image-upload.component';
import { IconComponent } from './component/icon/icon.component';
import { UserTypeBoxComponent } from './component/userTypeBox/userTypeBox.component';
import { BottombarComponent } from './component/bottombar/bottombar.component';
import { TextviewComponent } from './component/textview/textview.component';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
     ButtonComponent,
     TextFieldComponent,
     ImageUploadComponent,
     IconComponent,
     UserTypeBoxComponent,
     BottombarComponent,
     TextviewComponent,
    ],
  
  exports: [
    ButtonComponent,
     TextFieldComponent,
     ImageUploadComponent,
     IconComponent,
     UserTypeBoxComponent,
     BottombarComponent,
     TextviewComponent,
    
    ],
     
  providers: [PageService]
})
export class ThemeModule { }
