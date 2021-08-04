import has from 'has-value';
import get from 'get-value';
import set from 'set-value';
import union from 'union-value';
import merge from 'merge-value';
import Chalk from 'chalk';
import Filer from './modules/filer.mjs';
import Crawler from './modules/crawler.mjs';
import SourceEntity from './entities/source.mjs';

try {

    const source_list = Filer.readFileList('./sources')
    .map(element_parameter => new SourceEntity(get(element_parameter, 'content', {})));

} catch (error_parameter) {

    throw error_parameter;

}