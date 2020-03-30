import { Selector, RequestLogger, ClientFunction } from 'testcafe';
import { pseudoRandomBytes } from 'crypto';
//----------------- Variables --------------------
const getCurrentUrl = ClientFunction(() => window.location.href);
const validCredentials = {
    username: 			'luisaaguillar@gmail.com',
    password: 			'Goyillo21'
};
const invalidCredentials = {
    username: 			'glez.aguilar.luis@gmail.com',
    password: 			'signals21'
};
const ErrorMessages = {
    noMail:             'Invalid email address.',
    noPwd:              'Blank password.',
    wrongData:          'Wrong email or password.'
};
const taskNames = {
	name1:				'AutomatedTask' + (Math.floor(Math.random() * 100) + 1)
};
const numberOfTasks = 10;

export {getCurrentUrl, validCredentials, invalidCredentials, ErrorMessages, taskNames, numberOfTasks};