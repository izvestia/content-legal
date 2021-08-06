

export default class {


    #option_item_ = {
        syntax: null
    }

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

}