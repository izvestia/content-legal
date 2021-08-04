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

        const option_item = typeof option_parameter === 'object'
            ? option_parameter
            : JSON.parse(`${option_parameter}`);
        ;

    }

    static readFileItem
    (
        path_parameter = ''
    )
    {

        path_parameter = `${path_parameter}`;

        let result_item = {};

        try {

            const path_item = Path.resolve(path_parameter);
            result_item = Path.parse(path_item);
            set(
                result_item
                , 'content'
                , FS.readFileSync(
                    path_item
                    , 'utf8'
                )
            );

        } catch (error_parameter) {
            throw error_parameter;
        }

        return result_item;

    }

    static readFileList
    (
        path_parameter = ''
    )
    {

        path_parameter = `${path_parameter}`;
        let result_item = [];

        try {

            const path_item = Path.resolve(path_parameter);
            const file_list = FS.readdirSync(
                Path.resolve(path_item)
                , {
                    encoding: 'utf8',
                    withFileTypes: true
                }
            )
            .filter(element_parameter => element_parameter.isFile())
            .map(file_parameter => get(file_parameter, 'name'));

            for (let file_item of file_list) {
                result_item.push(
                    this.readFileItem(Path.join(path_item, file_item))
                );
            }

        } catch (error_parameter) {
            throw error_parameter;
        }

        return result_item;

    }

}