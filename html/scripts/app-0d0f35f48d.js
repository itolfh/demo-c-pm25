!function(){"use strict";angular.module("chartDemo",["chart.js","ngAnimate","ngCookies","ngTouch","ngSanitize","wilddog"])}(),function(){"use strict";angular.module("chartDemo").controller("LineCtrl",["$scope","$wilddogArray",function(o,a){o.data={},o.onShow=function(t){o.hide=!0;{var i=-1===t.indexOf("wilddogio")?"https://"+t+".wilddogio.com":t,e=new Wilddog(i);a(e).$loaded().then(function(a){a.forEach(function(a,t){"object"!=typeof a.$value&&null==o.data[a.$id]&&(n(o.data,a.$id),setInterval(function(){o.$apply(function(){var n=a.$value;o.data[a.$id].data[0].unshift(n),o.data[a.$id].data[0].pop()})},3e3))})})}};var n=function(o,a){o[a]={labels:[],series:[a],data:[[]]};for(var n=0;100>n;n++)o[a].labels.push(n),o[a].data[0].push(0)};o.onClick=function(o,a){}}])}();