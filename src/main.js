import Vue from 'vue'
import {Time} from './time';


require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');
new Vue({
    el: '#app',
    data: {
        times:[
            new Time( 'America MG' , require('./assets/america_mg_60x60.png') ),
            new Time( 'Atletico PR' , require('./assets/atletico-pr_60x60.png') ),
            new Time( 'atletico MG' , require('./assets/atletico_mg_60x60.png') ),
            new Time( 'Botafogo' , require('./assets/botafogo_60x60.png') ),
            new Time( 'Chapecoense' , require('./assets/chapecoense_60x60.png') ),
            new Time( 'Corinthians' , require('./assets/corinthians_60x60.png') ),

        ],
        alfabeto: {
            a: 'A',
            b: 'B',
            c: 'C',
            d: 'D',
            e: 'E',
        }

    },
});