import {expectType} from 'tsd';
import compareVersions from '.';

expectType<number>(compareVersions('1.2.0', '2.3.0'));
