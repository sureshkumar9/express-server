import {Ipermission} from './interface';
export const permissions:Ipermission= {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
}