import {expectType} from 'tsd';
import compareVersions = require('.');

expectType<number>(compareVersions('1.2.0', '2.3.0'));
