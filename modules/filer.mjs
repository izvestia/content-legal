import get from 'get-value';
import set from 'set-value';
import * as FS from 'fs';
import * as Path from 'path';

export default class {

    constructor
    (
        option_parameter = {}
    )
    {

        option_parameter = typeof option_parameter === 'object'
            ? option_parameter
            : JSON.parse(`${option_parameter}`);
        ;

    }

    static readFile
    (
        path_parameter = ''
    )
    {

        path_parameter = `${path_parameter}`;

        let result_item = FS.promises.readFile(
            Path.resolve(path_parameter)
            , {
                encoding: 'utf8'
            }
        );

        return result_item;

    }

    static readDirectory
    (
        path_parameter = ''
    )
    {

        path_parameter = `${path_parameter}`;

        const result_item = FS.promises.readdir(
            Path.resolve(path_parameter)
            , {
                encoding: 'utf8',
                withFileTypes: true
            }
        );

        return result_item;

    }

}