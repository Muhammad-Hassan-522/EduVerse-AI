import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ProfileFormComponent } from '../../../../shared/components/profile-form/profile-form.component';
import { ChangePasswordComponent } from '../../../../shared/components/change-password/change-password.component';
import { CommonModule } from '@angular/common';
import { SystemSettingsComponent } from "../../../admin/components/system-settings/system-settings.component";

@Component({
  selector: 'app-student-settings',
  imports: [
    HeaderComponent,
    CommonModule,
    ChangePasswordComponent,
    ProfileFormComponent,
    SystemSettingsComponent
],
  templateUrl: './student-settings.component.html',
  styleUrl: './student-settings.component.css',
})
export class StudentSettingsComponent {
  activeTab: 'profile' | 'system' = 'profile';
}
