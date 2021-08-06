import has from 'has-value';
import get from 'get-value';
import set from 'set-value';
import union from 'union-value';
import merge from 'merge-value';
import * as Path from 'path';
import Chalk from 'chalk';
import Filer from './modules/filer.mjs';
import Crawler from './modules/crawler.mjs';
import Parser from './modules/parser.mjs';
import SourceEntity from './entities/source.mjs';

class Worker
{

    constructor
    (
        option_parameter = {}
    )
    {

        option_parameter = typeof option_parameter === 'object'
            ? option_parameter
            : JSON.parse(`${option_parameter}`);
        ;

        merge(this.#option_item_, 'source', get(option_parameter, 'source', this.#option_item_));

        this.#loadSourceList();

    }

    #option_item_ = {
        source: {
            path: Path.resolve('./sources')
        }
    };

    #loadSourceList
    ()
    {

        Filer.readDirectory(get(this.#option_item_, 'source.path'))
            .then(content_parameter => this.#onSuccess_loadSourceList(content_parameter))
            .catch(error_parameter => this.#onError_loadSourceList(error_parameter))
        ;

    }

    #loadSourceItem
    (
        name_parameter = ''
    )
    {

        name_parameter = `${name_parameter}`;

        Filer.readFile(
            Path.join(get(this.#option_item_, 'source.path'), name_parameter)
        )
            .then(content_parameter => this.#onSuccess_loadSourceItem(content_parameter))
            .catch(error_parameter => this.#onError_loadSourceItem(error_parameter))
        ;

    }

    #onSuccess_loadSourceList
    (
        content_parameter
    )
    {

        content_parameter
        .filter(dirent_parameter => dirent_parameter.isFile())
        .map(file_parameter => get(file_parameter, 'name'))
        .forEach(name_parameter => this.#loadSourceItem(name_parameter));

    }

    #onError_loadSourceList
    (
        error_parameter
    )
    {

        throw error_parameter

    }

    #onSuccess_loadSourceItem
    (
        content_parameter
    )
    {

        const source_item = new SourceEntity(content_parameter);
        console.log(source_item.url);

    }


    #onError_loadSourceItem
    (
        error_parameter
    )
    {

        throw error_parameter

    }

}

const worker_item = new Worker();

    /*for (const file_item of file_list) {
        const source_item = new SourceEntity(get(file_item, 'content', {}));
        Crawler.getURLItem(source_item.url)
        .then(
            (
                response_parameter
            ) => {
                console.log(response_parameter);
            }
        )
        .catch(error_parameter => {throw error_parameter});//TODO: monitoring
    }*/
