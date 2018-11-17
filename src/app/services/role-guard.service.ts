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
    const expectedRole = route.data.expectedRole;
    if (
      !this.authService.isAuthenticated() ||
      expectedRole.indexOf(this.userService.getCurrentUserRolename()) === -1
    ) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
