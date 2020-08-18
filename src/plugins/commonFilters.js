import constant from '@/plugins/constant'

export default {

    $lineBreakFilter : function $lineBreakFilter (value){
        if(!value) {
            return '-';
        } else {
            return value.split('\n').join('<br />');
        }
    },
    
    $inputNumberOnlyFilter : function $inputNumberOnlyFilter (event) {
        const regex = /[^0-9]/gi;
        let value = event.target.value;
        value = value.replace(regex, '');
        event.target.value = value;
    },

    $mobileNoFilter : function $mobileFilter (value) {
        if(!value){
            return '-';
        }
        if(value.length < 10){
            return value;
        }
        if(value.length === 10) {
            return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }
        if(value.length === 11) {
            return value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        }
    },
    
    $convertNumberAddCommaFilter : function $convertNumberAddCommaFilter (value) {
        if(typeof value === typeof undefined || value === null) {
            return '-';
        }

        const num = Number(value);
        if (!num) {
            return '0';
        }

        return num.toLocaleString('en');
    },

    $nullCheckFilter: function $nullCheckFilter (value) {
        if(typeof value === typeof undefined || value === null) {
            return '-';
        } else {
            return value;
        }
    },
    
    $inputNoSpecialCharFilter : function $inputNoSpecialCharFilter (event) {
        const regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
        const value = event.target.value;

        if (regex.test(value)) {
            event.target.value = value.replace(regex, '')
        }
    }
}