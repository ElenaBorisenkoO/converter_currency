'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        })
        .constant('converterConstants', {
            'persentagesList': [0, 2, 5, 10]
          });
        }
