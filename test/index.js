'use strict';
var test = require('tape');
var relationship = require('..');

test('relationship.js show to be tested', function (t) {
    // console.log('[test]',relationship({text:'舅妈',target:'二舅',type:'pair'}));
    t.deepEqual(relationship({text:'儿子的爸爸的妈妈',sex:1}),['妈妈']);
    t.deepEqual(relationship({text:'爱人',sex:1}),['老婆']);
    t.deepEqual(relationship({text:'爱人的爱人',sex:1}),['自己']);
    t.deepEqual(relationship({text:'老婆的爱人',sex:1}),['自己']);
    t.deepEqual(relationship({text:'老婆的老公',sex:1}),['自己']);
    t.deepEqual(relationship({text:'老婆的外孙的姥爷',sex:1}),['自己']);
    t.deepEqual(relationship({text:'表姐的哥哥',sex:1}),['姑表哥','舅表哥']);
    t.deepEqual(relationship({text:'表姐的妹妹',sex:1}),['姑表姐','姑表妹','舅表姐','舅表妹']);
    t.deepEqual(relationship({text:'弟弟的表哥',sex:1}),['姑表哥','姑表弟','舅表哥','舅表弟']);
    t.deepEqual(relationship({text:'老公的老婆的儿子的爸爸',sex:0}),['老公']);
    t.deepEqual(relationship({text:'哥哥的弟弟的爸爸的儿子',sex:1}),['哥哥','弟弟','自己']);
    t.deepEqual(relationship({text:'爸爸的舅舅',sex:0,reverse:true}),['甥孙女']);
    t.deepEqual(relationship({text:'舅爷爷',type:'chain'}),['爸爸的妈妈的兄弟']);
    t.deepEqual(relationship({text:'堂兄弟的孩子',sex:1}),['堂侄','堂侄女']);
    t.deepEqual(relationship({text:'岳母',target:'女儿',reverse:true}),['外孙女']);
    t.deepEqual(relationship({text:'姑妈',target:'舅妈',reverse:true}),['兄弟眷兄弟妇']);
    t.deepEqual(relationship({text:'舅妈',target:'女儿',reverse:true}),['姑甥孙女','姑甥外孙女']);
    t.deepEqual(relationship({text:'老公的父母',target:'孩子'}),['爷爷','奶奶']);
    t.deepEqual(relationship({text:'爸爸的哥哥的弟弟的儿子'}),['堂哥','堂弟','哥哥','弟弟','自己']);
    t.deepEqual(relationship({text:'外婆',target:'女婿',reverse:true}),['外曾孙女婿','外曾外孙女婿']);
    t.deepEqual(relationship({text:'我',target:'爸爸'}),['儿子','女儿']);
    t.deepEqual(relationship({text:'爱人',target:'娘家侄子'}),['姑丈']);
    t.deepEqual(relationship({text:'岳母的配偶的孩子的爸爸'}),['岳父']);
    t.deepEqual(relationship({text:'舅妈',target:'外婆',type:'pair'}),['婆媳']);
    t.deepEqual(relationship({text:'妈妈的二哥'}),['二舅']);
    t.deepEqual(relationship({text:'爸爸的二哥'}),['二伯']);
    t.deepEqual(relationship({text:'二舅妈',target:'二舅',type:'pair'}),['夫妻']);
    t.deepEqual(relationship({text:'二舅妈',target:'大舅',type:'pair'}),['叔嫂']);
    t.deepEqual(relationship({text:'舅妈',target:'二舅',type:'pair'}),['叔嫂','夫妻']);
    t.deepEqual(relationship({text:'二舅妈',target:'三舅'}),['二嫂']);
    t.deepEqual(relationship({text:'爸爸的二爸'}),['二爷爷']);
    t.deepEqual(relationship({text:'大舅',target:'二舅的儿子'}),['大伯']);
    t.end();
});
