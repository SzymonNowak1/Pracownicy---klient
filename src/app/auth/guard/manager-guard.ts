import { AuthenticationService } from '../authentication.service';
import { RouterStateSnapshot, Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root' }) 
export class ManagerGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if ( currentUser ) {
            if ( currentUser.roles.includes('MANAGER') ) {
                return true;
            }
            
            this.router.navigate(['/']);
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } } );
        return false;
    }
}