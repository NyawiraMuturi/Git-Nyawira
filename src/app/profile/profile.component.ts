import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repos } from '../repos';
import { Profile } from '../users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  repos: Repos;
  

  constructor(private profileService: ProfileService) { 
    this.profileService.getProfileDetails().subscribe(profile=> {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos=> {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit(): void {
  }

}
