import {dbTokens} from './database/tokens';
import {authTokens} from './authorization/tokens';

export const providerTokens = {
    db: dbTokens,
    auth: authTokens,

    jwtProvider: 'JwtProvider',
};
