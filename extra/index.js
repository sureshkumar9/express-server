import {diamond,equilateral} from './patterns/index';
import {hasPermission,validateUsers} from './utils/index';
import {permissions} from './constants'
equilateral(10);
diamond(5);
let x = hasPermission(permissions.getUsers, 'head-trainer', 'delete');
console.log(x);
console.log(permissions);
export const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        },
        {
        traineeEmail: 'trainee2successive.tech',
        reviewerEmail: 'reviewer2@succesive.tech',
        }   
];
validateUsers(users);