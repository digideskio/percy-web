import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-mocha';
import { mocha } from 'mocha';

setResolver(resolver);

mocha.setup({
  timeout: 4000,
  slow: 2000
});
