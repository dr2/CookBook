import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';

angular.module('app.services')
	.service('API', APIService)
	.service('DialogService', DialogService);
