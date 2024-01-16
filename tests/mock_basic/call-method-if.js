import { blackbox } from './blackbox';

export const callMethodIf = (condition) => {
    return blackbox(condition);
};
