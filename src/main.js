import Vue from 'vue'
import {Time} from './time';


require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');
new Vue({
    el: '#app',
    data: {
        times:[
            new Time( 'America MG' , require('./assets/america_mg_60x60.png') ),
            new Time( 'America MG' , require('./assets/america_mg_60x60.png') ),
            new Time( 'America MG' , require('./assets/america_mg_60x60.png') ),
            new Time( 'America MG' , require('./assets/america_mg_60x60.png') ),
            new Time( 'America MG' , require('./assets/america_mg_60x60.png') ),
            new Time( 'America MG' , require('./assets/america_mg_60x60.png') ),

        ]

    },
});