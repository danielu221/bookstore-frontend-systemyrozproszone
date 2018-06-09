import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    private userService: UserService
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(this.userService.getCurrentUser());
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    console.log("ROLA: ");
    console.log(expectedRole);
    //console.log(this.userService.getCurrentUser().role);
    // if (this.userService.getCurrentUser() != undefined) {
    //   this.router.navigate(["login"]);
    //   return false;
    // }
    if (
      !this.authService.isAuthenticated() ||
      expectedRole.indexOf(this.userService.getCurrentUser()["role"]) == -1
    ) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
